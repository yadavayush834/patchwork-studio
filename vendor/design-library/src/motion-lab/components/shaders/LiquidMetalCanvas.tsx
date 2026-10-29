import React, { useEffect, useRef } from 'react';

export interface LiquidMetalCanvasProps {
  speed?: number;
  viscosity?: number; // 0.5 to 3.0
  chromaIntensity?: number;
  contrast?: number;
  interactive?: boolean;
}

const VERT_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG_SHADER = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_viscosity;
uniform float u_chroma;
uniform float u_contrast;

// Fractional Brownian Motion for liquid distortion
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 5; ++i) {
    v += a * noise(p);
    p = rot * p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

  // Mouse ripple influence
  vec2 m = (u_mouse * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  float d = length(p - m);
  float ripple = sin(d * 12.0 - u_time * 4.0) * exp(-d * 2.5) * 0.35;

  // Domain warping for viscous chrome mercury
  vec2 q = vec2(0.0);
  q.x = fbm(p + 0.1 * u_time * u_viscosity + ripple);
  q.y = fbm(p + vec2(1.0) + ripple);

  vec2 r = vec2(0.0);
  r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * u_time * u_viscosity);
  r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * u_time * u_viscosity);

  float f = fbm(p + r * 1.5);

  // Chrome metallic specular reflection
  vec3 col = mix(vec3(0.05, 0.08, 0.15), vec3(0.85, 0.90, 0.98), clamp((f * f) * 4.0, 0.0, 1.0));
  col = mix(col, vec3(0.02, 0.03, 0.05), clamp(length(q), 0.0, 1.0));
  col = mix(col, vec3(0.95, 0.98, 1.0), clamp(length(r.x), 0.0, 1.0));

  // Iridescent chromatic fringe on wave crests
  vec3 chroma = vec3(
    sin(f * 6.28 + 0.0) * 0.5 + 0.5,
    sin(f * 6.28 + 2.09) * 0.5 + 0.5,
    sin(f * 6.28 + 4.18) * 0.5 + 0.5
  );

  col = mix(col, chroma, u_chroma * 0.4);
  col = pow(col, vec3(u_contrast));

  gl_FragColor = vec4(col, 1.0);
}
`;

export function LiquidMetalCanvas({
  speed = 1.0,
  viscosity = 1.0,
  chromaIntensity = 0.5,
  contrast = 1.2,
  interactive = true,
}: LiquidMetalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 300, y: 170 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) return;

    // Compile Shaders
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = createShader(gl.VERTEX_SHADER, VERT_SHADER);
    const frag = createShader(gl.FRAGMENT_SHADER, FRAG_SHADER);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Fullscreen Quad Geometry
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uVisc = gl.getUniformLocation(program, 'u_viscosity');
    const uChroma = gl.getUniformLocation(program, 'u_chroma');
    const uCont = gl.getUniformLocation(program, 'u_contrast');

    let animId: number;
    const startTime = performance.now();

    const resize = () => {
      const w = canvas.parentElement?.clientWidth || 600;
      const h = 340;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const now = (performance.now() - startTime) * 0.001 * speed;

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now);
      gl.uniform2f(uMouse, mouseRef.current.x, canvas.height - mouseRef.current.y);
      gl.uniform1f(uVisc, viscosity);
      gl.uniform1f(uChroma, chromaIntensity);
      gl.uniform1f(uCont, contrast);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, [speed, viscosity, chromaIntensity, contrast, interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[340px] p-2 rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234]">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className="w-full h-full rounded-xl cursor-pointer"
        style={{ display: 'block', maxHeight: '340px' }}
      />
    </div>
  );
}
export default LiquidMetalCanvas;

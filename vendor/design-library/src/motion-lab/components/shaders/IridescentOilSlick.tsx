import React, { useEffect, useRef } from 'react';

export interface IridescentOilSlickProps {
  speed?: number;
  filmThickness?: number; // 0.5 to 3.0
  swirlStrength?: number;
  brightness?: number;
}

const VERT_SRC = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG_SRC = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_thickness;
uniform float u_swirl;
uniform float u_brightness;

// Complex optical cosine palette for thin-film interference
vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.00, 0.33, 0.67);
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  vec2 mouse = (u_mouse * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

  // Swirl velocity around pointer
  vec2 delta = uv - mouse;
  float dist = length(delta);
  float angle = atan(delta.y, delta.x);
  
  float twist = sin(dist * 6.0 - u_time * 2.0) * exp(-dist * 1.5) * u_swirl;
  mat2 rot = mat2(cos(twist), -sin(twist), sin(twist), cos(twist));
  vec2 p = rot * uv;

  // Layered turbulent wave patterns
  float t = u_time * 0.4;
  for (float i = 1.0; i < 4.0; i++) {
    p.x += 0.3 / i * sin(i * 3.0 * p.y + t + mouse.x * 0.5);
    p.y += 0.3 / i * cos(i * 3.0 * p.x + t + mouse.y * 0.5);
  }

  // Thin-film interference optical phase depth
  float phase = sin(p.x * 2.0 + p.y * 2.0) * 0.5 + 0.5;
  phase = pow(phase, u_thickness);

  vec3 col = palette(phase + u_time * 0.1);

  // Dark obsidian oil substrate with iridescent spectral sheen
  col *= u_brightness;
  col = mix(vec3(0.05, 0.06, 0.09), col, clamp(phase * 1.4, 0.0, 1.0));

  gl_FragColor = vec4(col, 1.0);
}
`;

export function IridescentOilSlick({
  speed = 1.0,
  filmThickness = 1.2,
  swirlStrength = 1.5,
  brightness = 1.1,
}: IridescentOilSlickProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 300, y: 170 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) return;

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const vert = createShader(gl.VERTEX_SHADER, VERT_SRC);
    const frag = createShader(gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vert || !frag) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uThick = gl.getUniformLocation(prog, 'u_thickness');
    const uSwirl = gl.getUniformLocation(prog, 'u_swirl');
    const uBright = gl.getUniformLocation(prog, 'u_brightness');

    let animId: number;
    const start = performance.now();

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
      const now = (performance.now() - start) * 0.001 * speed;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now);
      gl.uniform2f(uMouse, mouseRef.current.x, canvas.height - mouseRef.current.y);
      gl.uniform1f(uThick, filmThickness);
      gl.uniform1f(uSwirl, swirlStrength);
      gl.uniform1f(uBright, brightness);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, [speed, filmThickness, swirlStrength, brightness]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
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
export default IridescentOilSlick;

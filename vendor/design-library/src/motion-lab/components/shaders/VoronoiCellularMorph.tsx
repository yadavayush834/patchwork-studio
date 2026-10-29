import React, { useEffect, useRef } from 'react';

export interface VoronoiCellularMorphProps {
  speed?: number;
  cellScale?: number; // 2.0 to 12.0
  borderWidth?: number;
  colorScheme?: 'neon' | 'amber' | 'emerald';
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
uniform float u_scale;
uniform float u_border;
uniform int u_scheme;

vec2 hash2(vec2 p) {
  return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv * u_scale;
  
  // Grid coordinates
  vec2 i_st = floor(p);
  vec2 f_st = fract(p);

  float m_dist = 1.0;
  vec2 m_point = vec2(0.0);

  // 3x3 Voronoi neighbor search
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));
      vec2 point = hash2(i_st + neighbor);

      // Animate feature points with sinusoidal orbits
      point = 0.5 + 0.5 * sin(u_time * 1.5 + 6.2831 * point);

      vec2 diff = neighbor + point - f_st;
      float dist = length(diff);

      if (dist < m_dist) {
        m_dist = dist;
        m_point = point;
      }
    }
  }

  // Cell border distance highlight
  float border = smoothstep(u_border, u_border + 0.05, m_dist);

  // Palette schemes
  vec3 col = vec3(0.0);
  if (u_scheme == 0) {
    // Neon Cyan / Violet
    vec3 c1 = vec3(0.02, 0.94, 1.0);
    vec3 c2 = vec3(0.66, 0.22, 0.98);
    col = mix(c1, c2, m_point.x) * (1.0 - m_dist * 0.8);
  } else if (u_scheme == 1) {
    // Cyber Amber
    vec3 c1 = vec3(1.0, 0.65, 0.0);
    vec3 c2 = vec3(0.95, 0.25, 0.1);
    col = mix(c1, c2, m_point.y) * (1.0 - m_dist * 0.8);
  } else {
    // Bio Emerald
    vec3 c1 = vec3(0.1, 0.9, 0.5);
    vec3 c2 = vec3(0.05, 0.4, 0.8);
    col = mix(c1, c2, m_point.x) * (1.0 - m_dist * 0.8);
  }

  // Draw dark cell borders with inner ambient glow
  col = mix(vec3(0.04, 0.06, 0.10), col, border);
  
  // Subtle feature center nucleus dot
  if (m_dist < 0.08) {
    col += vec3(0.4);
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

export function VoronoiCellularMorph({
  speed = 1.0,
  cellScale = 6.0,
  borderWidth = 0.12,
  colorScheme = 'neon',
}: VoronoiCellularMorphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const uScale = gl.getUniformLocation(prog, 'u_scale');
    const uBorder = gl.getUniformLocation(prog, 'u_border');
    const uScheme = gl.getUniformLocation(prog, 'u_scheme');

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

    const schemeCode = colorScheme === 'neon' ? 0 : colorScheme === 'amber' ? 1 : 2;

    const render = () => {
      const now = (performance.now() - start) * 0.001 * speed;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now);
      gl.uniform1f(uScale, cellScale);
      gl.uniform1f(uBorder, borderWidth);
      gl.uniform1i(uScheme, schemeCode);

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
  }, [speed, cellScale, borderWidth, colorScheme]);

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[340px] p-2 rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234]">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-xl"
        style={{ display: 'block', maxHeight: '340px' }}
      />
    </div>
  );
}
export default VoronoiCellularMorph;

import {
  vertex,
  facet,
  frequency,
  daybreak,
  latticeVertex,
  latticeFragment,
} from "./shaders";
import type { HeroId } from "./catalog";
export function createGL(canvas: HTMLCanvasElement, id: HeroId) {
  const context = canvas.getContext("webgl", {
    alpha: false,
    antialias: id === "lattice",
    powerPreference: "low-power",
    preserveDrawingBuffer: false,
  });
  if (!context) throw new Error("WebGL unavailable");
  const gl: WebGLRenderingContext = context;
  const shader = (type: number, source: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, source);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      const error = gl.getShaderInfoLog(s);
      gl.deleteShader(s);
      throw new Error(error || "Shader compilation failed");
    }
    return s;
  };
  const vs = shader(
      gl.VERTEX_SHADER,
      id === "lattice" ? latticeVertex : vertex,
    ),
    fs = shader(
      gl.FRAGMENT_SHADER,
      id === "lattice"
        ? latticeFragment
        : { facet, frequency, daybreak }[
            id as "facet" | "frequency" | "daybreak"
          ],
    );
  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    throw new Error(gl.getProgramInfoLog(program) || "Shader linking failed");
  gl.useProgram(program);
  const buffer = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  let count = 3;
  if (id === "lattice") {
    const positions: number[] = [];
    const n = 68;
    for (let y = 0; y <= n; y++)
      for (let x = 0; x < n; x++) {
        const a = (x / n) * 4.5 - 2.25,
          b = (y / n) * 4.5 - 2.25;
        positions.push(a, b, a + 4.5 / n, b, b, a, b, a + 4.5 / n);
      }
    count = positions.length / 2;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  } else
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const uniforms = Object.fromEntries(
    ["resolution", "time", "pointer", "shift", "accent", "intensity"].map(
      (key) => [key, gl.getUniformLocation(program, key)],
    ),
  );
  function resize() {
    const pixels = id === "daybreak" ? 360 : id === "facet" ? 1100 : 1100;
    const w = canvas.clientWidth,
      h = canvas.clientHeight,
      scale = Math.min(1.25, pixels / Math.max(w, h));
    canvas.width = Math.max(1, Math.round(w * scale));
    canvas.height = Math.max(1, Math.round(h * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  function draw(
    time: number,
    pointer: { x: number; y: number },
    shift: number,
    accent: string,
    intensity: number,
  ) {
    const rgb = accent.match(/[a-f\d]{2}/gi)!.map((v) => parseInt(v, 16) / 255);
    if (id === "lattice") {
      gl.clearColor(rgb[0], rgb[1], rgb[2], 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    gl.useProgram(program);
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform2f(uniforms.pointer, pointer.x, pointer.y);
    gl.uniform1f(uniforms.time, time);
    gl.uniform1f(uniforms.shift, shift);
    gl.uniform1f(uniforms.intensity, intensity);
    gl.uniform3f(uniforms.accent, rgb[0], rgb[1], rgb[2]);
    gl.drawArrays(id === "lattice" ? gl.LINES : gl.TRIANGLES, 0, count);
  }
  return {
    resize,
    draw,
    dispose: () => {
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    },
  };
}

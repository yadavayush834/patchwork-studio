import * as THREE from "three";

/**
 * Pixel-art post pass shared by the pixel stories: render the 3D scene at a
 * fraction of the screen resolution, then snap every pixel to a fixed palette
 * with 4x4 ordered dither and ink a 1px outline wherever a near object sits in
 * front of something much farther away.
 */
export interface PixelPassOptions {
  palette: string[];
  dither?: number;
  outlineNear?: number;
  outlineInk?: string;
}
export function createPixelPass(opts: PixelPassOptions) {
  const pal = opts.palette.slice(0, 32);
  while (pal.length < 32) pal.push(pal[pal.length - 1]);
  const ink = new THREE.Color(opts.outlineInk ?? "#0d0f1f");
  const material = new THREE.ShaderMaterial({
    uniforms: {
      tColor: { value: null as THREE.Texture | null },
      tDepth: { value: null as THREE.Texture | null },
      uRes: { value: new THREE.Vector2(1, 1) },
      uPal: { value: pal.map((h) => { const c = new THREE.Color(h); return new THREE.Vector3(c.r, c.g, c.b); }) },
      uNear: { value: 0.1 },
      uFar: { value: 600 },
      uDither: { value: opts.dither ?? 0.05 },
      uOutline: { value: opts.outlineNear ?? 140 },
      uInk: { value: new THREE.Vector3(ink.r, ink.g, ink.b) },
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */ `
      #include <packing>
      uniform sampler2D tColor, tDepth; uniform vec2 uRes; uniform vec3 uPal[32], uInk; uniform float uNear, uFar, uDither, uOutline;
      varying vec2 vUv;
      float bayer2(vec2 a){ a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
      float bayer4(vec2 a){ return bayer2(0.5 * a) * 0.25 + bayer2(a); }
      float depthAt(vec2 uv){ return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, uNear, uFar); }
      vec3 nearest(vec3 c){
        vec3 best = uPal[0]; float bd = 1e9;
        for (int i = 0; i < 32; i++) { vec3 d = (c - uPal[i]) * vec3(0.9, 1.2, 0.7); float e = dot(d, d); if (e < bd) { bd = e; best = uPal[i]; } }
        return best;
      }
      void main(){
        vec3 c = pow(max(texture2D(tColor, vUv).rgb, 0.0), vec3(1.0 / 2.2));
        c += (bayer4(gl_FragCoord.xy) - 0.5) * uDither;
        vec2 px = 1.0 / uRes;
        float d0 = depthAt(vUv), far = 0.0;
        far = max(far, depthAt(vUv + vec2(px.x, 0.0)) - d0);
        far = max(far, depthAt(vUv - vec2(px.x, 0.0)) - d0);
        far = max(far, depthAt(vUv + vec2(0.0, px.y)) - d0);
        far = max(far, depthAt(vUv - vec2(0.0, px.y)) - d0);
        if (far > 0.6 + d0 * 0.06 && d0 < uOutline) c = mix(c * 0.3, uInk, 0.55);
        gl_FragColor = vec4(nearest(c), 1.0);
      }`,
  });
  const target = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthTexture: new THREE.DepthTexture(4, 4) });
  material.uniforms.tColor.value = target.texture;
  material.uniforms.tDepth.value = target.depthTexture;
  const scene = new THREE.Scene();
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  return {
    material,
    setSize(w: number, h: number) {
      target.setSize(w, h);
      material.uniforms.uRes.value.set(w, h);
    },
    render(renderer: THREE.WebGLRenderer, world: THREE.Scene, view: THREE.PerspectiveCamera) {
      material.uniforms.uNear.value = view.near;
      material.uniforms.uFar.value = view.far;
      renderer.setRenderTarget(target);
      renderer.render(world, view);
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
    },
    dispose() {
      target.depthTexture?.dispose();
      target.dispose();
      material.dispose();
    },
  };
}

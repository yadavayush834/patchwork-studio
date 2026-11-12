# Patchwork Studio

A small studio in the browser for making websites that feel alive. Pick a world, change the words and colours, add a moving background, and download a site that works anywhere: no account, no server, nothing hosted.

```sh
npm ci
npm run dev     # http://127.0.0.1:5174
```

## What's inside

- **The editor.** Sections, four worlds, backgrounds, decorations, fonts, motion, undo/redo, phone preview. Projects save in your browser; *Export* downloads a finished site, *Download editable project* a backup you can import again.
- **ASCII backgrounds.** Night lotus, Aurora, Neon rain, Koi pond, and *Your painting*: paint something (or start from a photo or one of the starter pictures) in the paint studio and it becomes living characters. Turn on **Living site** and the whole site follows each visitor's clock: dawn colours, a starry night, the aurora only after dark.
- **Hero sections.** One-screen openings, each built a different way: raymarched chrome, a fluid simulation, ASCII globes, refraction… and three painted ones rendered in real depth — *Reading Room* (walk the table, the sun follows), *Forge* (hold to work the bellows, watch the heat gauge climb) and *Tea House* (a steep timer that makes the kettle steam).
- **Scenes.** Full-screen pixel places behind a headline. Ten are painted live in shaders; *Onsen*, *Arcade* and *Sky Isle* are pixel paintings that move in 3D.
- **Motion templates.** Whole scroll-told websites. The newest, *Overnight*, is a night on a sleeper train in four pixel paintings rendered in depth, with a ticket that gets punched at every stop.
- **Components, Spirits, the Design Library and the Video Lab** for everything in between.

Every collection piece opens on its own page, customises in place and downloads as a folder you can drop into a site.

## How the painted pieces work

Some pieces start as paintings made with ChatGPT image generation. Each painting also gets a depth map, and Patchwork's own **Diorama** engine (WebGL2, no dependencies) renders the pair as a small 3D place: the camera moves through it, near things pass in front of far things, lights glow and flicker, rays fall through windows, and particles drift at real depths. See [docs/DIORAMA.md](docs/DIORAMA.md).

## Working on it

Read [AGENTS.md](AGENTS.md) first, then [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Before calling a change done:

```sh
npm test
npm run build
```

…and look at what you changed in a real browser.

## Licences

Patchwork's own code and artwork, including the ASCII scenes and the generated paintings, are CC0. Fonts keep their SIL Open Font Licences; GSAP and Three.js keep their notices. All of these ship inside every download under `licenses/`.

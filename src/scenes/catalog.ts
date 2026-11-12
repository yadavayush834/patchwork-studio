/** Patchwork Scenes: living pixel-art places, painted in a shader and dithered to their own palette. */
export const scenes = [
  {
    id: "lastbus",
    name: "Last Bus",
    mood: "Rainy city night",
    description: "A wet street after midnight: towers full of lit rooms, a buzzing neon sign, a sodium lamp and a bus shelter. The last bus hums past with a few people riding home, and the road mirrors everything. Move the pointer to change the wind in the rain; click for lightning.",
    interaction: "Move: wind in the rain · Click: lightning",
    palette: ["#11142a", "#463f7d", "#e0643c", "#ffe3a6", "#5fd0c8", "#d2457e"],
    layout: "top-right",
    defaults: { brand: "Nightline", eyebrow: "Night routes · Every city", headline: "The city is still awake.", sub: "Timetables, quiet cafés and the last bus home, for everyone who keeps late hours.", cta: "Plan a night route", cta2: "How it works" },
  },
  {
    id: "kelp",
    name: "Kelp",
    mood: "Under the sea",
    description: "A kelp forest with sunlight falling in shafts. Three depths of kelp sway in the current, a school of fish follows your pointer and scatters when you click, bubbles rise and a manta passes far behind.",
    interaction: "Move: lead the fish · Click: scatter them",
    palette: ["#03101a", "#0f5566", "#26988f", "#bff0dc", "#2f6b34", "#f2a33a"],
    layout: "top-left",
    defaults: { brand: "Holdfast", eyebrow: "Ocean field notes", headline: "Go under for a while.", sub: "A slow guide to the kelp forests: what lives there, why it matters and how to see it for yourself.", cta: "Start reading", cta2: "Dive maps" },
  },
  {
    id: "longnight",
    name: "Long Night",
    mood: "Snow cabin and aurora",
    description: "A cabin on a snowy ridge under the northern lights. Snow drifts in three depths and the chimney smoke leans with your pointer's wind; the window glows warmer as you come near, and a click throws a shooting star.",
    interaction: "Move: wind and window glow · Click: shooting star",
    palette: ["#050814", "#24406f", "#35c08a", "#8e4aa0", "#dfe8f5", "#ffe08a"],
    layout: "middle-left",
    defaults: { brand: "Hearth", eyebrow: "Winter cabins · Off grid", headline: "Stay for the long night.", sub: "Small cabins far from the city, with wood stoves, dark skies and no signal on purpose.", cta: "Find a cabin", cta2: "See the skies" },
  },
  {
    id: "rooftops",
    name: "Rooftops",
    mood: "Golden-hour city roof",
    description: "A city roof at golden hour. Washing flaps in the wind you set with the pointer, string lights sway, a water tower stands against the low sun, and a click sends the pigeons off the parapet.",
    interaction: "Move: wind in the washing · Click: startle the pigeons",
    palette: ["#2a1a33", "#7a3a4f", "#e07a5f", "#ffe1b0", "#5fb3a8", "#e9c46a"],
    layout: "top-left",
    defaults: { brand: "Upstairs", eyebrow: "Rooftop suppers · Fridays", headline: "Dinner is on the roof.", sub: "Long tables above the street, food from the neighbours and the best seat for the sunset.", cta: "Book a seat", cta2: "This week's menu" },
  },
  {
    id: "riso",
    name: "Riso Swell",
    mood: "Two-ink risograph print",
    description: "A sunset at sea printed in two inks that overprint where they meet, each with its own grain. The pointer knocks the plates out of register and lifts the sun; a click re-inks the whole print in the next pair of colours.",
    interaction: "Move: registration and sun · Click: change the inks",
    palette: ["#f4eee0", "#ff5c9e", "#2173bf", "#ff7a33", "#2f4d9e", "#ffd433"],
    layout: "riso",
    defaults: { brand: "Swell Press", eyebrow: "Riso print studio", headline: "Printed slow, by hand.", sub: "Zines, posters and postcards in two inks, run one sheet at a time on a risograph by the sea.", cta: "Start a print", cta2: "Ink colours" },
  },
  {
    id: "lanterns",
    name: "Lantern River",
    mood: "Blue-hour festival",
    description: "Blue hour in a river gorge. Paper lanterns drift down the river toward you and others rise into the sky, leaning with your pointer's wind; the water mirrors all of it. A click lets a handful more go from where you clicked.",
    interaction: "Move: wind for the lanterns · Click: release more",
    palette: ["#0a0c1f", "#34508a", "#c7a7c9", "#ff8a3d", "#fff0c2", "#213634"],
    layout: "top-center",
    defaults: { brand: "Lanternfall", eyebrow: "Autumn festival · One night only", headline: "Let one go for someone.", sub: "One evening on the river, a few thousand paper lanterns and a wish written on each of them.", cta: "Get a lantern", cta2: "The route" },
  },
  {
    id: "tidewatch", name: "Tidewatch", mood: "Storm-light harbor",
    description: "A working lighthouse above a basalt harbor. Its Fresnel beam sweeps over a moored fishing boat, tiled cottages, a tide-cut causeway and wind-driven rain. Move to steer the beam; send a signal to light up the water.",
    interaction: "Move: steer the lighthouse · Activate: signal the harbor",
    palette: ["#091723", "#254857", "#59848a", "#c8d2b4", "#e8ae61", "#b56d49"], layout: "top-left",
    defaults: { brand: "Tidewatch", eyebrow: "Notes from the coast", headline: "A light to come home to.", sub: "Harbor stories, weathered places and the people who keep a little light burning.", cta: "Read the coast", cta2: "Harbor notes" },
  },
  {
    id: "cloudline", name: "Cloudline", mood: "Mountain cable-car morning",
    description: "Ride a timber cable car above terraced tea hills, a stone viaduct and distant snowy ridges. An opposing gondola passes the window; a cup steams on the sill. Move to look around, and ring the bell to send birds over the valley.",
    interaction: "Move: look through the cabin · Activate: ring the bell",
    palette: ["#203a3c", "#547d82", "#8b965d", "#e5d4a0", "#c48759", "#f5e5bb"], layout: "top-left",
    defaults: { brand: "Cloudline", eyebrow: "The slower way up", headline: "Take the long way above.", sub: "A quiet ride over tea gardens, mountain villages and the river far below.", cta: "Find your way up", cta2: "Valley journal" },
  },
  {
    id: "glasshouse", name: "Glasshouse", mood: "Rainy nocturnal conservatory",
    description: "A riveted glass vault shelters banana leaves, layered ferns and tiny orchids after dark. Rain slides down the panes, a brass pendant lights the tiled floor, and moths gather around the warmth. Move their glow; release a new flight.",
    interaction: "Move: draw the moths closer · Activate: release a flight",
    palette: ["#071c20", "#1a4341", "#477351", "#b1b579", "#e0d1a2", "#cb9c5c"], layout: "top-left",
    defaults: { brand: "Afterleaf", eyebrow: "The garden after dark", headline: "Leave the weather outside.", sub: "An evening among the leaves. Small discoveries from a glasshouse that never quite sleeps.", cta: "Enter the garden", cta2: "Field notebook" },
  },
  {
    id: "courtyard", name: "Pomegranate Court", mood: "Sun-warmed fountain courtyard",
    description: "A small courtyard of tiled arches, sun-warmed plaster and rippling leaf shadows. Linen moves above a mosaic fountain, pomegranates hang overhead, and a ginger cat sleeps on the step. Stir the air, ripple the water and wake the sparrows.",
    interaction: "Move: stir the linen and shade · Activate: wake the courtyard",
    palette: ["#393d47", "#986b58", "#edcca0", "#698e91", "#72854b", "#bd543c"], layout: "top-left",
    defaults: { brand: "Pomegranate", eyebrow: "An afternoon, unhurried", headline: "Meet me by the fountain.", sub: "A little shade, a place to sit and nowhere else you need to be for a while.", cta: "Step into the court", cta2: "A few stories" },
  },
  {
    id: "onsen", name: "Onsen", mood: "Hot spring in the snow",
    description: "An outdoor hot spring high in the mountains, painted in pixels and rendered in real depth: snow falls in front of and behind the inn, steam rolls off the turquoise pool and the lanterns breathe. Move to look across the water; click the pool to drop a pebble.",
    interaction: "Move: look across the pool · Click: drop a pebble",
    palette: ["#0b1530", "#2b4a86", "#e9f0fb", "#1fb3a5", "#ffb45e", "#3c2a22"], layout: "top-left", engine: "diorama",
    defaults: { brand: "Yukimi", eyebrow: "Mountain inn · Winter only", headline: "Warm water, falling snow.", sub: "Six rooms, one outdoor spring and a long quiet night above the clouds.", cta: "Reserve a night", cta2: "The springs" },
  },
  {
    id: "arcade", name: "Arcade", mood: "Neon arcade after hours",
    description: "A small arcade after closing time, in pixels and real depth. Cabinets flicker down the aisle, rain runs down the front window and neon hums on the ceiling. Insert a coin and every screen flares while pixel confetti flies.",
    interaction: "Move: walk the aisle · Click: insert a coin",
    palette: ["#140a24", "#ff3fae", "#2fe8f0", "#7b3cff", "#ffd23f", "#f5f0ff"], layout: "top-left", engine: "diorama",
    defaults: { brand: "Continue?", eyebrow: "Indie games night · Thursdays", headline: "One more go.", sub: "A night of small games made by small studios. Bring friends, bring coins, stay until the lights go up.", cta: "Get a ticket", cta2: "This week's games" },
  },
  {
    id: "skyisle", name: "Sky Isle", mood: "Floating temple at sunrise",
    description: "A temple on a floating island above a sea of cloud, in pixels and real depth: the rocks hang at different distances, so the whole place turns as you move. The sunrise throws rays through the trees and blossom drifts by. Send a gust for a cloud of petals.",
    interaction: "Move: turn the island · Click: send a gust",
    palette: ["#2a1f3d", "#d9725b", "#ffc98a", "#fff1d6", "#5f8f4a", "#e88aa8"], layout: "top-left", engine: "diorama",
    defaults: { brand: "Skyward", eyebrow: "A game in progress", headline: "There is land above the clouds.", sub: "A small exploration game about islands, weather and the temples someone left up there.", cta: "Wishlist it", cta2: "Devlog" },
  },
  {
    id: "hayfield", name: "Hayfield", mood: "Title card at golden hour",
    description: "The page's headline as a film title, hung in the sky of a late-summer valley at a real depth: the old oak's leaves pass in front of the letters as you look around. The scene opens like a film, with a credit, a push-in and the title writing itself on. Click the meadow for a gust of petals.",
    interaction: "Move: look around the title · Click: a gust of petals",
    palette: ["#3b2a4a", "#c77c8f", "#ffb36b", "#fff2da", "#7a8a3a", "#a8362f"], layout: "titlecard", engine: "diorama",
    defaults: { brand: "Long Grass", eyebrow: "A summer film festival", headline: "Late Summer", sub: "Seven evenings of films outdoors, on a hill above the valley. Bring a blanket; we bring the projector.", cta: "See the programme", cta2: "Getting there" },
  },
  {
    id: "aquarium", name: "Blue Room", mood: "Title card in an aquarium",
    description: "An aquarium after closing, and a title floating inside the tank: the nearest jellyfish drift in front of it and the far ones behind, while it glows a little in the water. Opens with a credit and a slow push-in. Tap the glass for a ripple and a burst of bubbles.",
    interaction: "Move: look through the glass · Click: tap the glass",
    palette: ["#03111f", "#0d3a66", "#2f86c4", "#9fe3ff", "#e6f8ff", "#b49cff"], layout: "titlecard", engine: "diorama",
    defaults: { brand: "Deepwater", eyebrow: "Late opening · Fridays", headline: "The Blue Room", sub: "The aquarium after dark: half the lights, twice the jellyfish and a quiet hour to sit with them.", cta: "Book a late visit", cta2: "What's in the tanks" },
  },
  {
    id: "nighttrain", name: "Night Train", mood: "Title card under the stars",
    description: "A sleeper train crosses a viaduct above a lake town, and the title hangs among the stars: in front of the mountains, behind the oak and the old signal on the hill. It opens like a film and writes itself on. Click to wake the fireflies.",
    interaction: "Move: look across the valley · Click: wake the fireflies",
    palette: ["#060b24", "#1d2f63", "#4a6aa8", "#ffd27a", "#ffeab8", "#3f7a3a"], layout: "titlecard", engine: "diorama",
    defaults: { brand: "Sleeper", eyebrow: "Overnight routes", headline: "Night Train", sub: "Go to sleep in one country and wake up in another. Cabins, timetables and the best windows to watch from.", cta: "Find a route", cta2: "The cabins" },
  },
] as const;

export type SceneId = (typeof scenes)[number]["id"];
/** `image`: an optional photo of your own, painted through the scene's palette (kept as a small data URL). */
export interface SceneConfig { brand: string; eyebrow: string; headline: string; sub: string; cta: string; cta2: string; href: string; pixel: number; text: boolean; image: string }
export const MAX_SCENE_IMAGE = 700_000;
export const isScene = (v: unknown): v is SceneId => scenes.some((s) => s.id === v);
export const scene = (id: SceneId) => scenes.find((s) => s.id === id)!;
/** Scenes made from a generated painting and its depth map, rendered by the Diorama engine. */
export const isDioramaScene = (id: SceneId) => (scene(id) as { engine?: string }).engine === "diorama";
/** Scenes whose headline is painted into the picture as a film title (public/scenes/titlecard.js). */
export const isTitleCardScene = (id: SceneId) => scene(id).layout === "titlecard";
export const PIXEL_SIZES = [3, 4, 5, 6] as const;
export function defaultScene(id: SceneId): SceneConfig {
  return { ...scene(id).defaults, href: "#", pixel: 4, text: true, image: "" };
}
const limits = { brand: 24, eyebrow: 48, headline: 60, sub: 160, cta: 28, cta2: 28, href: 300 } as const;
/** Trim, cap lengths, only allow safe links and the offered pixel sizes. */
export function normalizeScene(value: Partial<SceneConfig>, id: SceneId): SceneConfig {
  const out = defaultScene(id);
  for (const k of Object.keys(limits) as (keyof typeof limits)[]) {
    const v = value[k];
    if (typeof v === "string" && v.trim()) out[k] = v.trim().slice(0, limits[k]);
  }
  if (!/^(https?:\/\/|mailto:|#|\/)/i.test(out.href) || /^\/\//.test(out.href)) out.href = "#";
  const px = Number(value.pixel);
  if ((PIXEL_SIZES as readonly number[]).includes(px)) out.pixel = px;
  if (typeof value.text === "boolean") out.text = value.text;
  const img = value.image;
  if (typeof img === "string" && img.length <= MAX_SCENE_IMAGE && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(img)) out.image = img;
  return out;
}

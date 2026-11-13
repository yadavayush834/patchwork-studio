/** Is this URL the site maker? Kept import-free so main.tsx can check it cheaply. */
export const quiltRoute = (search: string) => new URLSearchParams(search).has("quilt");

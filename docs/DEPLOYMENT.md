# Deployment

The app is hosted on Vercel as the project `patchwork-studio`, connected to the GitHub repository's `main` branch. Vite builds it with `npm run build` into `dist/` (see `vercel.json`).

**Pushing to `main` deploys to production.** So:

1. Run `npm test` and `npm run build`, and check the changed pages in a browser.
2. Commit, then push to `main` only when the person you're working for asks.
3. Watch the deployment reach `READY` and open the changed pages on the live site.

For a review build that leaves production alone, use another branch (a preview deployment). The local link to the Vercel project (`.vercel/`) and any tokens stay out of commits.

Websites made inside Patchwork are not published by this: they stay in each visitor's browser until they download them.

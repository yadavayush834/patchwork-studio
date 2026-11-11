# Patchwork on Vercel

Verified 11 November 2026 through the authenticated Vercel connection.

- Live app: https://patchwork-studio-six.vercel.app
- Dashboard: https://vercel.com/ayush-yadavs-projects-b3d36a82/patchwork-studio
- Project: `patchwork-studio`, under `ayush yadav's projects`.
- Connected GitHub repository: `yadavayush834/patchwork-studio`.
- Production branch: `main`. Git pushes to this branch trigger production deployments.
- Latest verified production deployment: `READY`, Git commit `f0fad23a91bd866f230f933b3867ae8907acbb20`.
- Build configuration: Vite; `npm run build`; output `dist`, as configured in `vercel.json`.

The local checkout is linked to this existing project through ignored `.vercel/project.json`. This file identifies the project; it is not an authentication token and is not committed. The authenticated Vercel app connection can inspect deployments and deploy approved source without copying tokens into the application. No additional hosting project or paid resource was created.

## Updating the live app

1. Finish and review the intended source changes.
2. Run `npm test` and `npm run build`; exercise the changed flow in the browser.
3. Commit and push the intended changes to `main`.
4. Follow the Vercel deployment and confirm `READY` plus the expected commit.
5. Verify the affected paths on the live app.

Pushing `main` publishes application changes automatically. A GitHub push is therefore also a production deployment action for this repository. Do not push unrelated in-progress changes merely to set up or inspect the Vercel connection. A connection/setup request alone does not publish the current working tree.

For a review deployment without replacing production, use a non-production branch or an explicitly requested preview deployment. Preserve existing deployment protection. Account authentication, project links and environment files stay out of commits.

## Scope

This connection updates the Patchwork application itself. Website projects created inside the editor remain browser-local; publishing a generated customer website is a separate feature/workflow. Connecting Vercel does not move local IndexedDB projects or uploads between localhost and the live domain.

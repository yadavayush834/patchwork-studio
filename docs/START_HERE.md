# Continuing this project in another chat

Give the new agent the repository and this prompt:

> Continue Patchwork Studio from the current checkout. Read AGENTS.md, docs/STATE.md, docs/ARCHITECTURE.md, and docs/DESIGN.md first, then inspect git status and the relevant implementation before making changes. Follow docs/DEVELOPMENT.md for checks. The local studio and four ASCII motion studies are already implemented; preserve the shared preview/export renderer, local browser projects, shipped assets/licenses, and established visual style. Work solo unless I authorize delegation. My next request is: [describe the change].

The repository contains the code and shipped creative assets. A user-created website draft lives in browser IndexedDB, not Git. To give an agent a particular draft, download its editable-project ZIP from the studio and provide it separately.

Use docs/STATE.md for the current product scope and verified status, docs/TASKS.md for task history, and docs/VERIFICATION.md for evidence and limits. Do not assume an old localhost process, test browser session, or ignored screenshot/export artifact is still available.

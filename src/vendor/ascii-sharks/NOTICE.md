# ascii-sharks

World simulation, ASCII rasterizer, species, and math vendored from https://github.com/stackedlol/ascii-sharks (MIT, copyright 2026 drewdi).

The upstream engine wrapper is replaced by Patchwork's lifecycle controller for editor pause, export, density/speed settings, recording, and shared reduced-motion handling. The simulation and shark rasterizer remain upstream code. Any local adaptations are documented here. License is redistributed in public/licenses/ascii-sharks-MIT.txt and all website exports containing these scenes.

Pinned revision: a0074c16a106f0abc665fe9712ca445f8f98ad8e. A `setAccent` method was added to the renderer to tint fish/wakes while preserving the original silver shark shading.

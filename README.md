# example-sveltekit

Minimal server-rendered sveltekit app, deployed to [UQBITZ](https://uqbitz.com) using only the CLI.

Every request is rendered on the server: the page shows a per-request timestamp and id, echoes the `x-uqbitz-probe` header, and reads `release-marker.txt`, which the project's release command writes on each deploy.

- Runtime: Node (UQBITZ `node-runtime`), port 3000
- Start: `node build` (adapter-node)

License: MIT

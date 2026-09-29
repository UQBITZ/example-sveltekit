import { randomUUID } from 'node:crypto';
import { readFile } from 'node:fs/promises';

async function releaseMarker() {
  try {
    return (await readFile('release-marker.txt', 'utf8')).trim();
  } catch {
    return 'absent';
  }
}

// Runs on the server for every request: nothing here is prerendered.
export async function load({ request }) {
  return {
    renderedAt: new Date().toISOString(),
    requestId: randomUUID(),
    probe: request.headers.get('x-uqbitz-probe') ?? 'none',
    release: await releaseMarker(),
    runtime: typeof Bun !== 'undefined' ? `bun ${Bun.version}` : `node ${process.version}`
  };
}

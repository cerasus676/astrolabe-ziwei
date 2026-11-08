import { copyFileSync, readdirSync, renameSync } from 'node:fs';
import { join, sep } from 'node:path';

const out = 'out';
copyFileSync('LICENSE', join(out, 'LICENSE.txt'));

// Next.js static export can leave Windows separators inside RSC prefetch paths.
// The client requests the same segment as a flat, dot-separated filename.
if (process.platform === 'win32') {
  for (const relativePath of readdirSync(out, { recursive: true })) {
    if (!relativePath.endsWith('.txt')) continue;

    const parts = relativePath.split(sep);
    const segmentStart = parts.findIndex(part => part.startsWith('__next.'));
    if (segmentStart === -1 || segmentStart === parts.length - 1) continue;

    const filename = parts.slice(segmentStart).join('.');
    renameSync(join(out, relativePath), join(out, ...parts.slice(0, segmentStart), filename));
  }
}

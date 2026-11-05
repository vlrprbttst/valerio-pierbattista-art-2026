// Scans assets/artshows and writes src/shows-manifest.json:
//   { "<folder relative to assets/artshows>": ["1.jpg", "2.jpg", ...], ... }
// Runs automatically before `npm run dev` and `npm run build`.
// Re-run (or just restart dev / rebuild) after adding or removing show photos.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const base = join(root, 'assets', 'artshows');
const out = join(root, 'src', 'shows-manifest.json');
const IMG = /\.(jpe?g|png|webp|gif|avif)$/i;
const manifest = {};

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && IMG.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
  if (files.length && dir !== base) {
    manifest[relative(base, dir).split('\\').join('/')] = files;
  }
  for (const e of entries) if (e.isDirectory()) walk(join(dir, e.name));
};

walk(base);

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(sorted, null, 2) + '\n');
console.log(`shows-manifest: ${Object.keys(sorted).length} folders, ${Object.values(sorted).flat().length} photos`);

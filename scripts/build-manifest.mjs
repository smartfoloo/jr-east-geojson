#!/usr/bin/env node
// Regenerates geojson/manifest.json by listing every *.geojson file in geojson/.
// Static hosts (e.g. GitHub Pages) can't list a directory over HTTP, so the
// browser app reads this manifest instead to discover which files exist.
// Run this after adding or removing a file in geojson/:
//   node scripts/build-manifest.mjs

import { readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const geoDir = join(__dirname, '..', 'geojson');
const manifestPath = join(geoDir, 'manifest.json');

const files = readdirSync(geoDir)
  .filter((f) => f.endsWith('.geojson'))
  .sort((a, b) => a.localeCompare(b));

writeFileSync(manifestPath, JSON.stringify(files, null, 2) + '\n');
console.log(`Wrote ${files.length} file(s) to geojson/manifest.json`);

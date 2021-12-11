import { rm } from 'node:fs/promises';
import { URL } from 'url';

const rootFolder = new URL('../', import.meta.url);
const distFolder = new URL('dist/', rootFolder);
const bundleFolder = new URL('bundled/', rootFolder);

await rm(distFolder, { recursive: true, force: true });
await rm(bundleFolder, { recursive: true, force: true });
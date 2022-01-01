import { cp } from 'fs/promises';
import { URL } from 'url';

const types = new URL('../.rollup.cache/types', import.meta.url);
const to = new URL('../bundled/types', import.meta.url);
await cp(types, to, { recursive: true });
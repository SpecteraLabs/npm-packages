import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

export default defineConfig([
  {
    input: "dist/index.js",
    output: [
      {
        file: "bundled/index.cjs",
		format: "cjs",
		sourcemap: true
      },
      {
        file: "bundled/index.mjs",
		format: "esm",
		sourcemap: true
      },
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [
      {
        file: "bundled/index.d.ts",
		format: "es",
      },
    ],
    plugins: [dts()],
  },
]);
import { defineConfig } from 'rollup';

export default defineConfig([
	{
		input: 'dist/index.js',
		output: [
			{
				file: 'bundled/index.cjs',
				format: 'cjs',
				sourcemap: true
			},
			{
				file: 'bundled/index.mjs',
				format: 'esm',
				sourcemap: true
			}
		]
	}
]);

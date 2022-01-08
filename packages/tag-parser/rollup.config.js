import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig(
	{
		input: 'src/index.ts',
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
		],
		plugins: [typescript({
			tsconfig: './tsconfig.json',
			outputToFilesystem: false
		})]
	}
);

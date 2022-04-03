import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	entry: ['src/**/*.ts'],
	format: ['esm'],
	minify: false,
	skipNodeModulesBundle: true,
	target: 'esnext',
	tsconfig: 'src/tsconfig.json',
	bundle: false,
	shims: false,
	keepNames: true,
	splitting: false
});

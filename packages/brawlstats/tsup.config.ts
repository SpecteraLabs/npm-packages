import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/index.ts'],
	format: ['esm', 'iife', 'cjs'],
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: 'es2021',
	tsconfig: 'src/tsconfig.json',
	keepNames: true,
	globalName: 'BrawlStats',
	esbuildOptions: (options, context) => {
		switch (context.format) {
			case 'cjs': {
				options.banner = {
					js: [
						//
						'"use strict";',
						'globalThis.safetch = require("@sapphire/fetch");'
					].join('\n')
				};
				break;
			}
			case 'esm': {
				options.banner = {
					js: [
						//
						'import { fetch as safetch } from "@sapphire/fetch";',
						'globalThis.safetch = safetch;'
					].join('\n')
				};
				break;
			}
			case 'iife': {
				options.banner = {
					js: 'globalThis.safetch = globalThis.fetch'
				};
				break;
			}
		}
	}
});

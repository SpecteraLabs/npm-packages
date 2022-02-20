import { rm, writeFile } from 'node:fs/promises';
import pkg from '../package.json';

await writeFile(
	'tsup.config.ts',
	`import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/**/*.ts', '!src/**/*.d.ts'],
	format: ['esm', 'cjs'],
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: 'esnext',
	tsconfig: 'src/tsconfig.json',
	bundle: false,
	shims: false,
	keepNames: true,
	splitting: false
});
`
);

pkg.module = 'dist/index.mjs';
pkg.types = 'dist/index.d.ts';
pkg.exports = {
	import: `./${pkg.module}`,
	require: `./${pkg.main}`
};
pkg.scripts.prepublish = 'yarn build';

const { name, version, description, main, module, types, exports, ...rest } = pkg;

const pkg2 = {
	name,
	version,
	description,
	main,
	module,
	types,
	exports,
	...rest
};
await writeFile('package.json', JSON.stringify(pkg2, null, 2));
await writeFile('.npmignore', 'src\nnode_modules\n.yarn\n.*\ntsconfig.*\nyarn.lock\n*.ts');
await rm('scripts', { recursive: true, force: true });

// @ts-check

/** @type import('dts-bundle-generator/config-schema').OutputOptions */
const commonOutputParams = {
	inlineDeclareGlobals: false,
	sortNodes: true
};

/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
const config = {
	compilationOptions: {
		preferredConfigPath: './tsconfig.json'
	},

	entries: [
		{
			filePath: './dist/types/index.ts',
			outFile: './bundled/index.d.ts',
			noCheck: true,

			output: commonOutputParams,
		}
	]
};

module.exports = config;

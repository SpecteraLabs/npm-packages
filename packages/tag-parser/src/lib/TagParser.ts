import { ParsingError } from './errors/ParsingError';

export class TagParser {
	public parsingRegExp = /\{\{[^}]*\}\}/g;
	public optionTypes = ['string', 'number', 'boolean'];

	public parseData(name: string, description: string, options: string, response: string) {
		const parsedOptions = this.parseOptions(options);
		return {
			data: {
				name,
				description,
				options: parsedOptions
			},
			response
		};
	}

	public parseResponse(response: string, interaction: any) {
		if (!this.parsingRegExp.test(response)) return response;
		response = response.replaceAll('{{', '${').replaceAll('}}', '}');
		function replacer(template: string, obj: any) {
			const keys = Object.keys(obj);
			/* eslint-disable */
			const func = Function(...keys, 'return `' + template + '`;');
			/* eslint-enable */
			return func(...keys.map((k) => obj[k]));
		}
		return replacer(response, interaction);
	}

	private parseOptions(options: string) {
		if (!this.parsingRegExp.test(options))
			throw new ParsingError({
				message: 'Invalid options provided',
				identifier: 'invalid-options'
			});
		const parsedOptions = options.match(this.parsingRegExp)!;
		const optionsArray = [];
		for (let option of parsedOptions!) {
			option = option.trim().replace('{{', '').replace('}}', '');
			const optionDataButArray = option.split('|');
			const name = optionDataButArray[0];
			const description = optionDataButArray[1] ? optionDataButArray[1] : 'No description provided';
			const type = optionDataButArray[2];
			if (!this.optionTypes.includes(type))
				throw new ParsingError({
					message: `OptionType should be 'string' or 'number' or 'boolean' but recieved '${type}'`,
					identifier: 'unknown-type'
				});
			optionsArray.push({ name, description, type });
		}
		return optionsArray;
	}
}

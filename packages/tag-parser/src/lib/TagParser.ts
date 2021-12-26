import { ParsingError } from './errors/ParsingError';

export class TagParser {
	public parsingRegExp = /\{\{[^}]*\}\}/g;
	public optionTypes = ['string', 'number', 'boolean'];

	public parseData(data: ParsableDataObject) {
		const parsedOptions = data.options ? this.parseOptions(data.options) : [];
		const { name, description, response } = data;
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

	protected parseOptions(options: string) {
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
			const description = optionDataButArray[1] ?? 'No description provided';
			const type = optionDataButArray[2];
			const required = optionDataButArray[3] ? Boolean(optionDataButArray[3]) : false;
			if (!this.optionTypes.includes(type))
				throw new ParsingError({
					message: `OptionType should be 'string' or 'number' or 'boolean' but recieved '${type}'`,
					identifier: 'unknown-type'
				});
			optionsArray.push({ name, description, type, required });
		}
		return optionsArray;
	}
}

interface ParsableDataObject {
	name: string;
	description: string;
	options?: string;
	response: string;
}

export const parsingRegExp = /\{[^}]*\}\}/g;

export function parseData(name: string, description: string, options: string, response: string) {
	const parsedOptions = parseOptions(options);
	return {
		data: {
			name,
			description,
			options: parsedOptions
		},
		response
	}
}

function parseOptions(options: string) {
	if (!parsingRegExp.test(options)) throw new Error('Invalid options provided');
	const parsedOptions = options.match(parsingRegExp)!;
	const optionsArray = [];
	for (let option of parsedOptions!) {
		option = option.trim().replace('{{', '').replace('}}', '');
		const optionDataButArray = option.split('|');
		const name = optionDataButArray[0];
		const description = optionDataButArray[1] ? optionDataButArray[1] : 'No description provided';
		const type = optionDataButArray[2];
		optionsArray.push({ name, description, type });
	}
	return optionsArray;
}
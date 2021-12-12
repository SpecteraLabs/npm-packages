import type { ApplicationCommandData, CommandInteraction } from 'discord.js';
import { EventEmitter } from 'events';
import { ParsingError } from './errors/ParsingError';

export class TagParser extends EventEmitter {
	public parsingRegExp = /\{\{[^}]*\}\}/g;

	public parseData(name: string, description: string, options: string, response: string) {
		const parsedOptions = this.parseOptions(options);
		return {
			data: {
				name,
				description,
				options: parsedOptions
			} as ApplicationCommandData,
			response
		};
	}

	public parseResponse(response: string, interaction: CommandInteraction) {
		if (!this.parsingRegExp.test(response)) return interaction.reply(response);
		response = response.replaceAll('}}', '');
		// eslint-disable-next-line @typescript-eslint/no-base-to-string
		response = response.replaceAll('{{member', `${interaction.member}`);
		response = response.replaceAll('{{user', `${interaction.user}`);
		response = response.replaceAll('{{channel', `${interaction.channel}`);
		response = response.replaceAll('{{guild', `${interaction.guild}`);
		return interaction.reply(response);
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
			optionsArray.push({ name, description, type });
		}
		return optionsArray;
	}
}

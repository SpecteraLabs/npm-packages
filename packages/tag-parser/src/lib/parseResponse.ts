import { parsingRegExp } from "./parseData";

export async function parseResponse(response: string, interaction: any) {
	if (!parsingRegExp.test(response)) return interaction.reply(response)
	const parsedResponse = response.match(parsingRegExp)!;
	switch (parsedResponse[0].replace('{{', '').replace('}}', '')) {
		case 'member':
			return response.replace('{{member}}', interaction.member);
		case 'user':
			return response.replace('{{user}}', interaction.member.user);
		case 'channel':
			return response.replace('{{channel}}', interaction.channel);
		case 'guild':
			return response.replace('{{guild}}', interaction.channel.guild);
	}
}
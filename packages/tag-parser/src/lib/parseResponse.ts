import { parsingRegExp } from "./parseData";

export function parseResponse(response: string, interaction: any) {
	if (!parsingRegExp.test(response)) return interaction.reply(response)
	response = response.replaceAll('}}', '')
	response = response.replaceAll('{{member', interaction.member)
	response = response.replaceAll('{{user', interaction.member.user)
	response = response.replaceAll('{{channel', interaction.channel)
	response = response.replaceAll('{{guild', interaction.guild)
	return interaction.reply(response)
}
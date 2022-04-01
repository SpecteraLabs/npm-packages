import { Client } from 'brawlstats';
import { getConfigFile } from '#functions/config';

export async function getPlayer(tag: string) {
	const file = await getConfigFile();
	if (file) {
		const config = await import(file);
		const client = new Client({
			token: config.token
		});
		console.log(await client.getPlayer(`%23${tag}`));
	}
}

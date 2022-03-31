import { Client } from 'brawlstats';
import { readConfigFile } from '_functions/config';

export async function getPlayer(tag: string) {
	const file = await readConfigFile();
	const config = JSON.parse(file!);
	const client = new Client({
		token: config.token
	});
	console.log(client.getPlayer(`%23${tag}`));
}

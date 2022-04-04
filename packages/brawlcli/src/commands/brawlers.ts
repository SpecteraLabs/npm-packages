import { getConfigFile } from '#functions/config';
import { Client } from 'brawlstats';

export async function getBrawler(name?: string) {
	const file = await getConfigFile();
	if (file) {
		const config = await import(file);
		const client = new Client({
			token: config.token
		});
		const brawlers = await client.getBrawlers();
		if (!name) {
			const mapped = brawlers.map((brawler) => {
				return {
					name: brawler.name,
					id: brawler.id
				};
			});
			console.table(mapped);
		}
	}
}

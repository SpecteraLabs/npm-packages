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
		if (name) {
			const brawler = brawlers.find((brawler) => brawler.name === name.toUpperCase());
			if (brawler) {
				console.table([
					{
						name: brawler.name,
						id: brawler.id,
						'Star Powers': brawler.starPowers?.map((star) => star.name).join(', '),
						Gadgets: brawler.gadgets?.map((gadget) => gadget.name).join(', ')
					}
				]);
			} else {
				console.error(`Could not find brawler with name ${name}`);
			}
		} else {
			const mapped = brawlers.map((brawler) => {
				return {
					name: brawler.name,
					id: brawler.id,
					'Star Powers': brawler.starPowers?.map((star) => star.name).join(', '),
					Gadgets: brawler.gadgets?.map((gadget) => gadget.name).join(', ')
				};
			});
			console.table(mapped);
		}
	}
}

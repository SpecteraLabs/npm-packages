import { Client, dateFromBrawlStars, ItemsEntity } from 'brawlstats';
import { getConfigFile } from '#functions/config';

export async function getPlayer(tag: string, options: any) {
	const file = await getConfigFile();
	if (file) {
		const config = await import(file);
		const client = new Client({
			token: config.token
		});
		const player = await client.getPlayer(`%23${tag}`);
		const message = [
			{
				Name: player.name,
				Trophies: player.trophies,
				'Highest Trophies': player.highestTrophies,
				'Experience Level': player.expLevel,
				'3v3 Victories': player.trioVictories,
				'Solo Showdown Victories': player.soloVictories,
				'Duo Showdown Victories': player.duoVictories,
				Club: player.club.name
			}
		];
		console.table(message);
		if (options.battlelog) {
			const battles = await player.getBattleLog();
			type MyBattle = ItemsEntity & {
				map?: string | null;
				mode?: string;
				type?: string;
				result?: string;
				StarPlayer?: string;
			};
			battles?.map((battle: MyBattle) => {
				const typedBattle = battle as MyBattle;
				typedBattle.map = battle.event.map;
				typedBattle.mode = battle.battle.mode.charAt(0).toUpperCase() + battle.battle.mode.slice(1);
				typedBattle.type = battle.battle.type.charAt(0).toUpperCase() + battle.battle.type.slice(1);
				typedBattle.result = battle.battle.result!.charAt(0).toUpperCase() + battle.battle.result!.slice(1);
				typedBattle['StarPlayer'] = battle.battle.starPlayer ? battle.battle.starPlayer.name : 'N/A';
				// @ts-expect-error bruh
				delete battle.event;
				// @ts-expect-error bruh
				delete battle.battle;
				return battle;
			});
			for (const battle of battles!) {
				battle.battleTime = dateFromBrawlStars(battle.battleTime);
			}
			console.table(battles);
		}
		if (options.brawlers) {
			const { brawlers } = player;
			const mappedBrawlers = brawlers?.map((brawler) => {
				const { name, power, rank, trophies, highestTrophies } = brawler;
				return {
					name,
					power,
					rank,
					trophies,
					highestTrophies
				};
			});
			console.table(mappedBrawlers);
		}
	}
}

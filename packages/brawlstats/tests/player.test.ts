import 'dotenv/config';
import { Client } from '../src';

test('Check if a player is returned', async () => {
	const client = new Client();
	const player = await client.players.fetch('#22QJ0JPVJ')!;
	expect(player.name).toBe('Hemanth');
});

test("Get a player's battlelog without BattlelogManager", async () => {
	const client = new Client();
	const player = await client.players.fetch('#22QJ0JPVJ');
	const battlelog = await player?.getBattleLog();
	expect(battlelog?.length).toBe(25);
});

test('Fetch multiple players', async () => {
	const client = new Client();
	const players = await client.players.fetchMany('#22QJ0JPVJ', '#28L9VLU0');
	const [player1, player2] = players;
	expect([player1.tag, player2.tag]).toStrictEqual(['#22QJ0JPVJ', '#28L9VLU0']);
});

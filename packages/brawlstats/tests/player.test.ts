import 'dotenv/config';
import { Client } from '../src';

test('Check if a player is returned', async () => {
	const client = new Client();
	const player = await client.players.fetch('#22QJ0JPVJ')!;
	expect(player.name).toBe('Hemanth');
});

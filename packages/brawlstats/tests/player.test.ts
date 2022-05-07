import 'dotenv/config';
import { Client } from '../src';

test('Check if a player is returned', async () => {
	const client = new Client();
	expect((await client.players.fetch('#22QJ0JPVJ')!).name).toBe('Hemanth');
});

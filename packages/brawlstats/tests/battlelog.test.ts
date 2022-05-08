import 'dotenv/config';
import { Client } from '../src';

test('Check if a battlelog is returned', async () => {
	const client = new Client();
	const battlelog = await client.battlelogs.fetch('#22QJ0JPVJ')!;
	expect(battlelog.length).toBe(25);
});

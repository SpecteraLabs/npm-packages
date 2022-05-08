import 'dotenv/config';
import { Client } from '../src';

test('Check if a battlelog is returned', async () => {
	const client = new Client();
	const battlelog = await client.battlelogs.fetch('#22QJ0JPVJ')!;
	expect(battlelog.length).toBe(25);
});

test('Fetch multiple battlelogs', async () => {
	const client = new Client();
	const battlelogs = await client.battlelogs.fetchMany('#22QJ0JPVJ', '#28L9VLU0');
	const [battlelog1, battlelog2] = battlelogs;
	expect([battlelog1.length, battlelog2.length]).toStrictEqual([25, 25]);
});

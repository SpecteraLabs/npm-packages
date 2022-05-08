import 'dotenv/config';
import { Client } from '../src';

test('Check if a club is returned', async () => {
	const client = new Client();
	const club = await client.clubs.fetch('#2CU9RRVL')!;
	expect(club.name).toBe('Oxygen Force');
});

test('Fetch multiple clubs', async () => {
	const client = new Client();
	const clubs = await client.clubs.fetchMany('#22QJ0JPVJ', '#28L9VLU0');
	const [club1, club2] = clubs;
	expect([club1.tag, club2.tag]).toStrictEqual(['#22QJ0JPVJ', '#28L9VLU0']);
});

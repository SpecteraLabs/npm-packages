import 'dotenv/config';
import { Client } from '../src';

test('Check if a club is returned', async () => {
	const client = new Client();
	const club = await client.clubs.fetch('#2CU9RRVL')!;
	expect(club.name).toBe('Oxygen Force');
});

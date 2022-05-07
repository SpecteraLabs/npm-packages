import 'dotenv/config';
import { Client } from '../src';

test('Check if a club is returned', async () => {
	const client = new Client();
	expect((await client.clubs.fetch('#2CU9RRVL')!).name).toBe('Oxygen Force');
});

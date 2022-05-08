import { Structure } from '../src/lib/structures/Structure';
import 'dotenv/config';

test('Test if structures work', async () => {
	const structure = new Structure('brawlers/16000000');
	const data = await structure.request<{ name: string }>(undefined, process.env.BRAWLSTARS_TOKEN);
	expect(data.name).toBe('SHELLY');
});

import { Brawlers } from '../src';
import { makeBrawlersMap } from '../src/lib/helpers';
import 'dotenv/config';

test('Test if a brawler is fetched', () => {
	const brawlers = makeBrawlersMap();
	expect(brawlers.get(Brawlers.MR_P)).toEqual(brawlers.get('MR. P'));
});

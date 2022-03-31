import { findUp } from 'find-up';
import { setTimeout as sleep } from 'node:timers/promises';

export function readConfigFile() {
	return Promise.race([findUp('.brawlstatsrc.json', { cwd: '.' }), sleep(5000)]);
}

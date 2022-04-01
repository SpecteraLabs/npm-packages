import { findUp } from 'find-up';
import { setTimeout as sleep } from 'node:timers/promises';

export function getConfigFile() {
	return Promise.race([findUp('.brawlstatsrc.js', { cwd: '.' }), sleep(5000)]);
}

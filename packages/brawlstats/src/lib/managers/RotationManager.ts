import { Structure } from '../structures/Structure';
import type { IEvent } from '../types';
import { dateFromBrawlStars, from } from '../utils';

export class RotationManager {
	#token: string;
	public constructor(token: string) {
		this.#token = token;
	}

	/**
	 * Get the events rotation from the API.
	 * @param {RotationOptions} options The options to for data formatting.
	 */
	public get(options?: RotationOptions) {
		const structure = new Structure('events/rotation');
		return from(async () => {
			const data = await structure.request<IEvent[]>('', this.#token);
			const timezone = options?.timezone ?? 'Etc/UTC';
			const mapped = data.map((event) => {
				event.startTime = dateFromBrawlStars(event.startTime, timezone);
				event.endTime = dateFromBrawlStars(event.endTime, timezone);
				event.event.mode = event.event!.mode!.charAt(0).toUpperCase() + event.event!.mode!.slice(1);
				return event;
			});
			return mapped;
		});
	}
}

/**
 * The options to get a rotation.
 */
interface RotationOptions {
	/**
	 * The timezone to recieve times in, defaults to Etc/UTC.
	 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
	 */
	timezone?: string;
}

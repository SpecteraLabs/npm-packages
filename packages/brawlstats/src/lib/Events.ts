import Collection from '@discordjs/collection';
import { Base } from './Base';
import type { Events, IEvent } from './types';
import { dateFromBrawlStars, from } from './utils';

export class Event extends Base {
	public constructor() {
		super('events/rotation');
	}

	public static async getRotation(key: string) {
		const base = new Base('events/rotation');
		return from(async () => {
			const collection = new Collection<Events | keyof typeof Events, IEvent>();
			const data = await base.request<IEvent[]>('', key);
			for (const event of data) {
				event.startTime = dateFromBrawlStars(event.startTime);
				event.endTime = dateFromBrawlStars(event.endTime);
				event.event.mode = event.event.mode!.charAt(0).toUpperCase() + event.event.mode!.slice(1);
				// @ts-expect-error it is a string
				collection.set(event.event.mode!, event);
			}
			return collection;
		});
	}
}

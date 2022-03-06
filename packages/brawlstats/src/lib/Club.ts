import { Base } from './Base';
import type { IClub, MembersEntity } from './types';
import { from } from './utils';

export class Club extends Base implements IClub {
	public tag!: string;
	public name!: string;
	public description!: string;
	public type!: 'open' | 'closed';
	public badgeId!: number;
	public requiredTrophies!: number;
	public trophies!: number;
	public members?: MembersEntity[] | null | undefined;

	public constructor(data: IClub) {
		super('clubs');
		Object.assign(this, data);
	}

	public static async getClub(tag: string, token = process.env.BRAWLSTARS_TOKEN) {
		const base = new Base('clubs');
		return from(async () => {
			const data = await base.request<IClub>(`${tag}`, token);
			return new Club(data);
		});
	}
}

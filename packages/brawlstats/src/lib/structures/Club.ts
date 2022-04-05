import { Structure } from './Structure';
import type { IClub, MembersEntity } from '../types';

export class Club extends Structure {
	public tag!: string;
	public name!: string;
	public description!: string;
	public type!: 'open' | 'closed';
	public badgeId!: number;
	public requiredTrophies!: number;
	public trophies!: number;
	public members!: MembersEntity[];

	public constructor(data: Omit<IClub, 'members'>) {
		super('clubs');
		Object.assign(this, data);
	}
}

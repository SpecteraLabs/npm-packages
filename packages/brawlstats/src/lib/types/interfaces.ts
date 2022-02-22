export interface Brawler {
	id: number;
	name: string;
	starPowers?: StarPowersEntityOrGadgetsEntity[] | null;
	gadgets?: StarPowersEntityOrGadgetsEntity[] | null;
}
export interface StarPowersEntityOrGadgetsEntity {
	id: number;
	name: string;
}
export interface BrawlersInterface {
	items: Brawler[];
}

export interface BrawlerInterface {
  id: number;
  name: string;
  starPowers?: StarPowersEntityOrGadgetsEntity[] | null;
  gadgets?: StarPowersEntityOrGadgetsEntity[] | null;
}

export interface StarPowersEntityOrGadgetsEntity {
  id: number;
  name: string;
}

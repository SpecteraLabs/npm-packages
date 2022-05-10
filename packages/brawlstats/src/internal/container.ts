import type { ClientOptions } from '..';

export const container: Container = {};

export interface Container {
	options?: ClientOptions;
}

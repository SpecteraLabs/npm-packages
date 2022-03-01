import { fetch } from '@sapphire/fetch';

export class Base {
	public readonly url = 'https://api.brawlstars.com/v1';
	public endpoint: string;
	public constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	public async request<T>(endpoint = this.endpoint, token: string = process.env.BRAWLSTARS_TOKEN as string) {
		if (this.endpoint !== endpoint) endpoint = `${this.endpoint}/${endpoint}`;
		return fetch<T>(`${this.url}/${endpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	}
}

import { fetch } from '@sapphire/fetch';

export class Structure {
	#url = 'https://bsproxy.royaleapi.dev/v1';
	#endpoint: string;
	public constructor(endpoint: string) {
		this.#endpoint = endpoint;
	}

	public async request<T>(endpoint = this.#endpoint, token: string = process.env.BRAWLSTARS_TOKEN as string) {
		if (this.#endpoint !== endpoint) endpoint = `${this.#endpoint}/${endpoint}`;
		return fetch<T>(`${this.#url}/${endpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	}
}

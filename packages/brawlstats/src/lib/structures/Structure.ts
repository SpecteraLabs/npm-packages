import type { FetchResultTypes } from '@sapphire/fetch';
export class Structure {
	#url = 'https://bsproxy.royaleapi.dev/v1';
	#endpoint: string;
	public constructor(endpoint: string) {
		this.#endpoint = endpoint;
	}

	public async request<T>(endpoint = this.#endpoint, token: string = process.env.BRAWLSTARS_TOKEN as string) {
		if (this.#endpoint !== endpoint) endpoint = `${this.#endpoint}/${endpoint}`;
		return globalThis.safetch<T>(`${this.#url}/${endpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	}
}

declare namespace globalThis {
	function safetch<R>(url: URL | string, type?: FetchResultTypes.JSON): Promise<R>;
	function safetch<R>(url: URL | string, options: RequestInit, type?: FetchResultTypes.JSON): Promise<R>;
	function safetch(url: URL | string, type: FetchResultTypes.Buffer): Promise<Buffer>;
	function safetch(url: URL | string, options: RequestInit, type: FetchResultTypes.Buffer): Promise<Buffer>;
	function safetch(url: URL | string, type: FetchResultTypes.Blob): Promise<Blob>;
	function safetch(url: URL | string, options: RequestInit, type: FetchResultTypes.Blob): Promise<Blob>;
	function safetch(url: URL | string, type: FetchResultTypes.Text): Promise<string>;
	function safetch(url: URL | string, options: RequestInit, type: FetchResultTypes.Text): Promise<string>;
	function safetch(url: URL | string, type: FetchResultTypes.Result): Promise<Response>;
	function safetch(url: URL | string, options: RequestInit, type: FetchResultTypes.Result): Promise<Response>;
	function safetch<R>(url: URL | string, options: RequestInit, type: FetchResultTypes): Promise<Response | Blob | Buffer | string | R>;
}

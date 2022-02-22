import { Brawlers } from './Brawlers';

export class Client {
	#token!: string;
	public brawlers!: Brawlers;

	public async login(token: string) {
		this.#token = token;
		await this.#getBrawlers();
		return this;
	}

	async #getBrawlers() {
		const res = new Brawlers(this.#token);
		this.brawlers = await res.login();
	}
}

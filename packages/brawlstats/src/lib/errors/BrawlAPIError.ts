export class BrawlAPIError extends Error {
	public readonly reason: string;
	public readonly code: number;
	public constructor(options: BrawlAPIError.Options) {
		switch (options.reason) {
			case 'accessDenied':
				options.message = 'Invalid API key provided';
				break;
			case 'accessDenied.invalidIp':
				options.message = `API key does not allow access from IP ${options.message.split('IP ')[1]}`;
				break;
		}
		super(options.message);
		this.reason = options.reason;
		this.code = options.code;
	}

	// eslint-disable-next-line @typescript-eslint/class-literal-property-style
	public get name(): string {
		return 'BrawlAPIError';
	}
}

export namespace BrawlAPIError {
	export interface Options {
		code: number;
		reason: string;
		message: string;
	}
}

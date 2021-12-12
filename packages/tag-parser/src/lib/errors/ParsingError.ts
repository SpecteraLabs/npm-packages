export class ParsingError extends Error {
	public identifier: string;
	public readonly name = 'ParsingError';

	public constructor(options: ParsingError.Options) {
		super(options.message);
		this.identifier = options.identifier;
	}
}

export namespace ParsingError {
	export interface Options {
		identifier: string;
		message?: string;
	}
}

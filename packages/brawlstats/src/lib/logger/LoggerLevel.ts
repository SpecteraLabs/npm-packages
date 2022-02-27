import { LoggerStyle, LoggerStyleResolvable } from './LoggerStyle';

export class LoggerLevel {
	public infix: string;

	public message: LoggerStyle | null;

	public constructor(options: LoggerLevelOptions = {}) {
		this.infix = options.infix ?? '';
		this.message = options.message === null ? null : new LoggerStyle(options.message);
	}

	public run(content: string) {
		const prefix = this.infix;

		if (prefix.length) {
			const formatter = this.message //
				? (line: string) => prefix + this.message!.run(line)
				: (line: string) => prefix + line;
			return content.split('\n').map(formatter).join('\n');
		}

		return this.message ? this.message.run(content) : content;
	}
}

export interface LoggerLevelOptions {
	infix?: string;
	message?: LoggerStyleResolvable | null;
}

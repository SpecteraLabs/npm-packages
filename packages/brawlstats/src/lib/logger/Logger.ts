import { bgRed, Color, cyan, gray, isColorSupported, magenta, red, white, yellow } from 'colorette';
import { Console } from 'console';
import { inspect, InspectOptions } from 'util';
import { LogLevel } from '../types';
import { LoggerLevel, LoggerLevelOptions } from './LoggerLevel';

export class Logger {
	public level: LogLevel;
	public depth: number;
	public join: string;
	public readonly console: Console;
	public readonly formats: Map<LogLevel, LoggerLevel>;
	protected logLevels = new Map<LogLevel, LogMethods>([
		[LogLevel.Trace, 'trace'],
		[LogLevel.Debug, 'debug'],
		[LogLevel.Info, 'info'],
		[LogLevel.Warn, 'warn'],
		[LogLevel.Error, 'error'],
		[LogLevel.Fatal, 'error']
	]);

	private get levels() {
		return Reflect.get(this, 'logLevels') as Map<LogLevel, LogMethods>;
	}

	public constructor(options: LoggerOptions) {
		this.level = options.level ?? LogLevel.Info;
		this.console = new Console(options.stdout ?? process.stdout, options.stderr ?? process.stderr);
		this.formats = Logger.createFormatMap(options.format, options.defaultFormat);
		this.join = options.join ?? ' ';
		this.depth = options.depth ?? 0;
	}

	public has(level: LogLevel): boolean {
		return level >= this.level;
	}

	public write(level: LogLevel, ...values: unknown[]): void {
		if (level < this.level) return;

		const method = this.levels.get(level) ?? 'log';
		const formatter = this.formats.get(level) ?? this.formats.get(LogLevel.None)!;

		this.console[method](formatter.run(this.preprocess(values)));
	}

	public trace(...values: readonly unknown[]): void {
		this.write(LogLevel.Trace, ...values);
	}

	public debug(...values: readonly unknown[]): void {
		this.write(LogLevel.Debug, ...values);
	}

	public info(...values: readonly unknown[]): void {
		this.write(LogLevel.Info, ...values);
	}

	public warn(...values: readonly unknown[]): void {
		this.write(LogLevel.Warn, ...values);
	}

	public error(...values: readonly unknown[]): void {
		this.write(LogLevel.Error, ...values);
	}

	public fatal(...values: readonly unknown[]): void {
		this.write(LogLevel.Fatal, ...values);
	}

	protected preprocess(values: readonly unknown[]) {
		const inspectOptions: InspectOptions = { colors: isColorSupported, depth: this.depth };
		return values.map((value) => (typeof value === 'string' ? value : inspect(value, inspectOptions))).join(this.join);
	}

	private static createFormatMap(options: LoggerFormatOptions = {}, defaults: LoggerLevelOptions = options.none ?? {}) {
		return new Map<LogLevel, LoggerLevel>([
			[LogLevel.Trace, Logger.ensureDefaultLevel(options.trace, defaults, gray, 'TRACE')],
			[LogLevel.Debug, Logger.ensureDefaultLevel(options.debug, defaults, magenta, 'DEBUG')],
			[LogLevel.Info, Logger.ensureDefaultLevel(options.info, defaults, cyan, 'INFO')],
			[LogLevel.Warn, Logger.ensureDefaultLevel(options.warn, defaults, yellow, 'WARN')],
			[LogLevel.Error, Logger.ensureDefaultLevel(options.error, defaults, red, 'ERROR')],
			[LogLevel.Fatal, Logger.ensureDefaultLevel(options.fatal, defaults, bgRed, 'FATAL')],
			[LogLevel.None, Logger.ensureDefaultLevel(options.none, defaults, white, '')]
		]);
	}

	private static ensureDefaultLevel(options: LoggerLevelOptions | undefined, defaults: LoggerLevelOptions, color: Color, name: string) {
		if (options) return new LoggerLevel(options);
		return new LoggerLevel({
			...defaults,
			infix: name.length ? `${color(name.padEnd(5, ' '))} - ` : ''
		});
	}
}

export type LogMethods = 'trace' | 'debug' | 'info' | 'warn' | 'error';

export interface LoggerOptions {
	stdout?: NodeJS.WriteStream;

	stderr?: NodeJS.WriteStream;

	defaultFormat?: LoggerLevelOptions;

	format?: LoggerFormatOptions;

	level?: LogLevel;

	join?: string;

	depth?: number;
}

export interface LoggerFormatOptions {
	trace?: LoggerLevelOptions;

	debug?: LoggerLevelOptions;
	info?: LoggerLevelOptions;

	warn?: LoggerLevelOptions;

	error?: LoggerLevelOptions;

	fatal?: LoggerLevelOptions;

	none?: LoggerLevelOptions;
}

export class Stopwatch {
	public digits = 2;
	private start: number;
	private end: number | null;

	public get duration(): number {
		return this.end ? this.end - this.start : performance.now() - this.start;
	}

	public get running(): boolean {
		return Boolean(!this.end);
	}

	public constructor() {
		this.start = performance.now();
		this.end = null;
	}

	public restart(): this {
		this.start = performance.now();
		this.end = null;
		return this;
	}

	public stop(): this {
		if (this.running) this.end = performance.now();
		return this;
	}

	public toString(): string {
		const time = this.duration;
		if (time >= 1000) return `${(time / 1000).toFixed(this.digits)}s`;
		if (time >= 1) return `${time.toFixed(this.digits)}ms`;
		return `${(time * 1000).toFixed(this.digits)}μs`;
	}
}

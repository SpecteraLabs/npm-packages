import Collection from '@discordjs/collection';
import EventEmitter from 'events';

export class Cache<T> extends EventEmitter {
	private readonly cache: Collection<string, T> = new Collection();
	public constructor() {
		super();
		this.on('clear', (map, tts) => {
			setTimeout(() => {
				map.clear();
				console.log('Cache cleared');
			}, tts).unref();
		});
	}

	public override on<K extends keyof CacheEvents>(event: K, listener: (...args: CacheEvents[K]) => void): any;
	public override on<K extends keyof CacheEvents>(event: K, listener: (...args: CacheEvents[K]) => void) {
		super.on(event, listener as any);
	}

	public get(key: string) {
		return this.cache.get(key);
	}

	public set(key: string, value: T, tts: number) {
		this.cache.set(key, value);
		this.emit('clear', this.cache, tts);
	}

	public has(key: string) {
		return this.cache.has(key);
	}
}

interface CacheEvents {
	clear: [map: Collection<string, unknown>, tts: number];
}

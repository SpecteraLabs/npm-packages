import type { QueryError } from '@sapphire/fetch';
import { BrawlAPIError } from './errors/BrawlAPIError';

export function shallowEqual(object1: ObjectType, object2: ObjectType) {
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);
	if (keys1.length !== keys2.length) {
		return false;
	}
	for (const key of keys1) {
		if (object1[key] !== object2[key]) {
			return false;
		}
	}
	return true;
}

export async function from<T>(promiseOrCb: Awaitable<T> | ((...args: unknown[]) => Awaitable<T>)): Promise<unknown> {
	try {
		return await (isFunction(promiseOrCb) ? promiseOrCb() : promiseOrCb);
	} catch (e) {
		const error = e as QueryError;
		throw new BrawlAPIError({
			code: error.code,
			message: error.toJSON().message,
			reason: error.toJSON().reason
		});
	}
}

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(input: unknown): input is Function {
	return typeof input === 'function';
}

type Awaitable<T> = PromiseLike<T> | T;
interface ObjectType {
	[key: string]: unknown;
}

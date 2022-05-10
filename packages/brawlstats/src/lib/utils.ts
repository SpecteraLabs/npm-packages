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

export async function from<T>(promiseOrCb: Awaitable<T> | ((...args: unknown[]) => Awaitable<T>)): Promise<T> {
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

export function dateFromBrawlStars(value: string, timeZone: string) {
	return new Date(
		Number(value.substring(0, 4)),
		Number(value.substring(4, 6)) - 1,
		Number(value.substring(6, 8)),
		Number(value.substring(9, 11)),
		Number(value.substring(11, 13))
	).toLocaleString('en-US', {
		timeZone
	});
}

export function minutes(value: number) {
	return value * 60;
}

export function hours(value: number) {
	return value * minutes(60);
}

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(input: unknown): input is Function {
	return typeof input === 'function';
}

type Awaitable<T> = PromiseLike<T> | T;
interface ObjectType {
	[key: string]: unknown;
}

function shallowEqual(object1: ObjectType, object2: ObjectType) {
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

interface ObjectType {
	[key: string]: unknown;
}

export function parseTag(tag: string) {
	if (tag.startsWith('%23')) return tag;
	if (tag.startsWith('#')) return tag.replaceAll('#', '%23');
	return `%23${tag}`;
}

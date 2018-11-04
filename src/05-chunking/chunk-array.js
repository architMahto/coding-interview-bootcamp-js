/**
 * Divides an array by size into many subarrays
 *
 * @param array
 * @param size
 * @returns {array} An array of subarrays
 */
export function chunkArray(array, size) {
	const firstChunk = array.slice(0, size);

	if (!firstChunk.length) {
		return array;
	}

	return [firstChunk].concat(chunkArray(array.slice(size, array.length), size));
}

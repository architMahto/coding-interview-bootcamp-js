/**
 * Divides an array by size into many subarrays
 *
 * @param array
 * @param size
 * @returns {array} An array of subarrays
 */
export function chunkArray(array, size) {
	// if (!array.isArray()) {
	// 	return [];
	// }

	const firstChunk = array.slice(0, size); // create the first chunk of the given array

	if (!firstChunk.length) {
		return array; // this is the base case to terminal the recursive
	}

	return [firstChunk].concat(chunkArray(array.slice(size, array.length), size));
}

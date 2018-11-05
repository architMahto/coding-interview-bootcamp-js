/**
 * Calculates the number of vowels used in a string
 *
 * @param str
 * @returns {number} The number of vowels in a string
 */
export function vowels(str) {
	const vowels = str.match(/[aeiou]/gi);

	return vowels ? vowels.length : 0;
}

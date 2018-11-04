/**
 * Finds the character that is most commonly used in a string
 *
 * @param str
 * @returns {string} Character that occurs most frequently in a string
 */
export function maxChar(str) {
	const charMap = {};
	let maxChar = '';
	let maxValue = 0;

	str.split('').forEach(char => {
		charMap[char] = (charMap[char] + 1) || 1;
	});

	for (let char in charMap) {
		if (charMap[char] > maxValue) {
			maxChar = char;
			maxValue = charMap[char];
		}
	}

	return maxChar;
}

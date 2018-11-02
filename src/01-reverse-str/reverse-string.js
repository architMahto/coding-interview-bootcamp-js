/**
 * Reverses a string
 *
 * @param str
 * @returns {string} The reverse of str
 */
export function reverseStr(str) {
	return str.split('').reverse().join('');
}

/**
 * Reverses a string using a for loop
 *
 * @param str
 * @returns {string} The reverse of str
 */
export function reverseStr2(str) {
	let newStr = '';

	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}

	return newStr;
}

/**
 * Reverses a string using the reducer helper
 *
 * @param str
 * @returns {string} The reverse of str
 */
export function reverseStr3(str) {
	return str.split('').reduce((reversed, char) => {
		return char + reversed;
	}, '');
}

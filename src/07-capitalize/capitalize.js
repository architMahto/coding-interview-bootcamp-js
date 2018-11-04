/**
 * Capitalizes the first letter of each word in a string
 *
 * @param str
 * @returns {string} Capitalized string
 */
export function capitalize(str) {
	const words = str.split(' ');
	const newStr = words.map(word => getCapitalizedWord(word));

	return newStr.join(' ');
}

function getCapitalizedWord(word) {
	return word[0].toUpperCase() + word.slice(1);
}

/**
 * Checks to see if two provided strings are anagrams of each other
 *
 * @param strA
 * @param strB
 * @returns {boolean} True is two strings are anagrams of each other
 */
export function anagrams(strA, strB) {
	const modifiedStrA = strA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	const modifiedStrB = strB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	// const charMapA = getCharMap(modifiedStrA);
	// const charMapB = getCharMap(modifiedStrB);

	// return areCharMapsEquivalent(charMapA, charMapB);
	return modifiedStrA === modifiedStrB;
}

function getCharMap(str) {
	const charMap = {};

	str.split('').forEach(char => {
		charMap[char] = (charMap[char] + 1) || 1;
	});

	return charMap;
}

function areCharMapsEquivalent(mapA, mapB) {
	const mapAKeys = Object.keys(mapA);
	const mapBKeys = Object.keys(mapB);

	if (mapAKeys.length !== mapBKeys.length) {
		return false;
	}

	for (let prop in mapA) {
		if (mapA[prop] !== mapB[prop]) {
			return false;
		}
	}

	return true;
}

/**
 * Checks if a string is a a palindrome
 *
 * @param str
 * @returns {boolean} true if string is a palindrome, false otherwise
 */
export function isPalindrome(str) {
	let reversedStr = str.split('').reverse().join('');

	return reversedStr === str;
}

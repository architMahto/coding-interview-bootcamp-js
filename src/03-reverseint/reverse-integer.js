/**
 * Reverses an integer
 *
 * @param num
 * @returns {number} Returns a new integer that is the reverse ordering of num's digits
 */
export function reverseInteger(num) {
	let reversedNum = 0;

	while (num !== 0) {
		let remainder = num % 10;
		reversedNum = (reversedNum * 10) + remainder;
		num -= remainder;
		num = Math.floor(num/10);
	}

	return reversedNum;
}

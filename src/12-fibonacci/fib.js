/**
 * Calculates the nth entry in the fibonacci series
 *
 * @param num
 * @returns {number} nth entry in the fibonacci series
 */
export function fib(num, memo) {
	memo = memo || {};

	if (memo[num]) {
		return memo[num];
	}

	if (num === 0) {
		return 0;
	}

	if (num === 1) {
		return 1;
	}

	return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
}

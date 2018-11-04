/**
 * Prints out a pyramid shape with 'num' levels using the # character iteratively
 *
 * @param num
 */
export function iterativePyramids(num) {
	let rows = num;
	let cols = (2*num) - 1;
	let midpoint = Math.floor(cols/2);

	for (let row = 0; row < rows; row++) {
		let level = '';

		for (let col = 0; col < cols; col++) {
			if (((midpoint - row) <= col) && ((midpoint + row) >= col)) {
				level += '#';
			} else {
				level += ' ';
			}
		}

		console.log(level);
	}
}

/**
 * Prints out a pyramid shape with 'num' levels using the # character recursively
 *
 * @param num
 * @param row
 * @param col
 * @param level
 */
export function recursivePyramids(num, row = 0, col = 0, level = '') {
	let cols = (2*num) - 1;
	let midpoint = Math.floor(cols/2);

	if (row === num) {
		return;
	}

	if (col === cols) {
		console.log(level);
		return recursivePyramids(num, row + 1);
	}

	if (((midpoint - row) <= col) && ((midpoint + row) >= col)) {
		level += '#';
	} else {
		level += ' ';
	}

	recursivePyramids(num, row, col + 1, level);
}

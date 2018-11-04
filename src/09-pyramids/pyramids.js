/**
 * Prints out a pyramid shape with 'num' levels using the # character
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

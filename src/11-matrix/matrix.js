/**
 * Creates a spiral num x num matrix
 *
 * @param num
 * @returns {Array} A num X num spiral matrix
 */
export function matrix(num) {
	const result = [];
	let counter = 1;

	for (let i = 0; i < num; i++) {
		result.push([]);
	}

	let [startCol, startRow, endCol, endRow] = [0, 0, num - 1, num - 1];

	while (startCol <= endCol && startRow <= endRow) {
		// Assign values at starting row
		for (let col = startCol; col <= endCol; col++) {
			result[startRow][col] = counter;
			counter++;
		}

		startRow++;

		// Assign values at end column
		for (let row = startRow; row <= endRow; row++) {
			result[row][endCol] = counter;
			counter++;
		}

		endCol--;

		// Assign values at end row
		for (let col = endCol; col >= startCol; col--) {
			result[endRow][col] = counter;
			counter++;
		}

		endRow--;

		// Assign values at starting column
		for (let row = endRow; row >= startRow; row--) {
			result[row][startCol] = counter;
			counter++;
		}

		startCol++;
	}

	return result;
}

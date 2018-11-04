/**
 * Prints out a step shape with 'num' levels using the # character iteratively
 *
 * @param num
 */
export function iterativeSteps(num) {
	for (let row = 0; row < num; row++) {
		let step = '';

		for (let col = 0; col < num; col++) {
			if (col <= row) {
				step += '#';
			} else {
				step += ' ';
			}
		}

		console.log(step);
	}
}

/**
 * Prints out a step shape with 'num' levels using the # character recursively
 *
 * @param num
 * @param row
 * @param step
 */
export function recursiveSteps(num, row = 0, step = '') {
	if (row === num) {
		return;
	}

	if (num === step.length) {
		console.log(step);
		return recursiveSteps(num, row + 1);
	}

	if (step.length <= row) {
		step += '#';
	} else  {
		step += ' ';
	}

	recursiveSteps(num, row, step);
}

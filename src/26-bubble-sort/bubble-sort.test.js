import { expect } from 'chai';
import { bubbleSort } from './bubble-sort';

describe('Testing the bubbleSort method', function () {
	it('should exist', function () {
		expect(bubbleSort).to.not.be.undefined;
	});

	it('should sort an array', function () {
		let arr = [100, -40, 500, -124, 0, 21, 7];
		let sortedArr = [-124, -40, 0, 7, 21, 100, 500];

		expect(bubbleSort(arr)).to.equal(sortedArr);
	});
});

import { expect } from 'chai';
import { selectionSort } from './selection-sort';

describe('Testing the bubbleSort method', function () {
	it('should exist', function () {
		expect(selectionSort).to.not.be.undefined;
	});

	it('should sort an array', function () {
		let arr = [100, -40, 500, -124, 0, 21, 7];
		let sortedArr = [-124, -40, 0, 7, 21, 100, 500];

		expect(selectionSort(arr)).to.equal(sortedArr);
	});
});

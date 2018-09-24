import { expect } from 'chai';
import { merge, mergeSort } from './merge-sort';

describe('Testing the merge method', function () {
	it('should exist', function () {
		expect(merge).to.not.be.undefined;
	});

	it('should join two sorted arrays', function () {
		let left = [1, 10];
		let right = [2, 8, 12];

		expect(merge(left, right)).to.equal([1, 2, 8, 10, 12]);
	});
});

describe('Testing the mergeSort method', function () {
	it('should exist', function () {
		expect(mergeSort).to.not.be.undefined;
	});

	it('should sort an array', function () {
		let arr = [100, -40, 500, -124, 0, 21, 7];
		let sortedArr = [-124, -40, 0, 7, 21, 100, 500];

		expect(mergeSort(arr)).to.equal(sortedArr);
	});
});

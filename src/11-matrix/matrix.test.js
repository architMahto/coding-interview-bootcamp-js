import { expect } from 'chai';
import { matrix } from './matrix';

describe('Testing the matrix function', function () {
	it('should exist', function () {
		expect(matrix).to.not.be.undefined;
	});

	it('should produce a 2x2 array for matrix(2)', function () {
		const m = matrix(2);

		expect(m.length).to.equal(2);
		expect(m[0]).to.equal([1, 2]);
		expect(m[1]).to.equal([3, 4]);
	});

	it('should produce a 3x3 array for matrix(3)', function () {
		const m = matrix(3);

		expect(m.length).to.equal(3);
		expect(m[0]).to.equal([1, 2, 3]);
		expect(m[1]).to.equal([8, 9, 4]);
		expect(m[2]).to.equal([7, 6, 5]);
	});

	it('should produce a 4x4 array for matrix(4)', function () {
		const m = matrix(4);

		expect(m.length).to.equal(4);
		expect(m[0]).to.equal([1, 2, 3, 4]);
		expect(m[1]).to.equal([12, 13, 14, 5]);
		expect(m[2]).to.equal([11, 16, 15, 6]);
		expect(m[3]).to.equal([10, 9, 8, 7]);
	});
});

import { expect } from 'chai';
import { reverseInteger } from './reverse-integer';

describe('Testing the reverseInteger function', function () {
	it('should exist', function () {
		expect(reverseInteger).to.not.be.undefined;
	});

	it('should return 0 for \'0\'', function () {
		expect(reverseInteger(0)).to.equal(0);
	});

	it('should return 5 for \'5\'', function () {
		expect(reverseInteger(5)).to.equal(5);
	});

	it('should return 51 for \'15\'', function () {
		expect(reverseInteger(15)).to.equal(51);
	});

	it('should return 9 for \'90\'', function () {
		expect(reverseInteger(90)).to.equal(9);
	});

	it('should return 9532 for \'2539\'', function () {
		expect(reverseInteger(2539)).to.equal(9532);
	});

	it('should return -5 for \'-5\'', function () {
		expect(reverseInteger(-5)).to.equal(-5);
	});

	it('should return -51 for \'-15\'', function () {
		expect(reverseInteger(-15)).to.equal(-51);
	});

	it('should return -9 for \'-90\'', function () {
		expect(reverseInteger(-90)).to.equal(-9);
	});

	it('should return -9532 for \'-2359\'', function () {
		expect(reverseInteger(-2359)).to.equal(-9532);
	});
});

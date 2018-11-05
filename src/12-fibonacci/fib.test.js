import { expect } from 'chai';
import { fib } from './fib';

describe.only('Testing the fib function', function () {
	it('should exist', function () {
		expect(fib).to.not.be.undefined;
	});

	it('should calculate the correct fib value for 1', function () {
		expect(fib(1)).to.equal(1);
	});

	it('should calculate the correct fib value for 2', function () {
		expect(fib(2)).to.equal(1);
	});

	it('should calculate the correct fib value for 3', function () {
		expect(fib(3)).to.equal(2);
	});

	it('should calculate the correct fib value for 4', function () {
		expect(fib(4)).to.equal(3);
	});

	it('should calculate the correct fib value for 39', function () {
		expect(fib(39)).to.equal(63245986);
	});
});

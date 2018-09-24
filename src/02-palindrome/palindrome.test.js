import { expect } from 'chai';
import { isPalindrome } from './palindrome';

describe('Testing the isPalindrome function', function () {
	it('should exist', function () {
		expect(isPalindrome).to.not.be.undefined;
	});

	it('should return true for \'aba\'', function () {
		expect(isPalindrome('aba')).to.be.true;
	});

	it('should return false for \' aba\'', function () {
		expect(isPalindrome(' aba')).to.be.false;
	});

	it('should return false for \'aba \'', () => {
		expect(isPalindrome('aba ')).to.be.false;
	});

	it('should return false for \'greetings\'', () => {
		expect(isPalindrome('greetings')).to.be.false;
	});

	it('should return true for \'1000000001\'', () => {
		expect(isPalindrome('1000000001')).to.be.true;
	});

	it('should return false for \'Fish hsif\'', () => {
		expect(isPalindrome('Fish hsif')).to.be.false;
	});

	it('should return true for \'pennep\'', () => {
		expect(isPalindrome('pennep')).to.be.true;
	});
});

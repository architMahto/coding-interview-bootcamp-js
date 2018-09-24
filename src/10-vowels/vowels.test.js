import { expect } from 'chai';
import { vowels } from './vowels';

describe('Testing the vowels function', function () {
	it('should exist', function () {
		expect(vowels).to.not.be.undefined;
	});

	it('should return 5 for \'aeiou\' and \'AEIOU\'', function () {
		expect(vowels('aeiou')).to.equal(5);
		expect(vowels('AEIOU')).to.equal(5);
	});

	it('should return 5 for \'abcdefghijklmnopqrstuvwxyz\'', function () {
		expect(vowels('abcdefghijklmnopqrstuvwxyz')).to.equal(5);
	});

	it('should return 4 for \'waterloo\'', function () {
		expect(vowels('waterloo')).to.equal(4);
	});

	it('should return 0 fir \'kjdfhsfbq\'', function () {
		expect(vowels('kjdfhsfbq')).to.equal(0);
	});
});

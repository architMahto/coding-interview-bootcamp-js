import { expect } from 'chai';
import { reverseStr, reverseStr2, reverseStr3 } from './reverse-string';

describe('Testing the reverseStr function', function () {
	it('should exist', function () {
		expect(reverseStr).to.not.be.undefined;
	});

	it('should return dcba for abcd', () => {
		expect(reverseStr('abcd')).to.equal('dcba');
	});
});

describe('Testing the reverseStr2 function', function () {
	it('should exist', function () {
		expect(reverseStr2).to.not.be.undefined;
	});

	it('should return dcba for abcd', () => {
		expect(reverseStr3('abcd')).to.equal('dcba');
	});
});

describe('Testing the reverseStr3 function', function () {
	it('should exist', function () {
		expect(reverseStr2).to.not.be.undefined;
	});

	it('should return dcba for abcd', () => {
		expect(reverseStr3('abcd')).to.equal('dcba');
	});
});

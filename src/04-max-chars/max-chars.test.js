import { expect } from 'chai';
import { maxChar } from './max-chars';

describe.only('Testing the maxChar function', function () {
	it('should exist', function () {
		expect(maxChar).to.not.be.undefined;
	});

	it('should return \'a\' for \'a\'', function () {
		expect(maxChar('a')).to.equal('a');
	});

	it('should return \'a\' for \'abcdkadaaaaa\'', function () {
		expect(maxChar('abcdkadaaaaa')).to.equal('a');
	});

	it('should return \'1\' for \'ab1c1d1e1f1g1\'', function () {
		expect(maxChar('ab1c1d1e1f1g1')).to.equal('1');
	});
});

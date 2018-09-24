import { expect } from 'chai';
import { capitalize } from './capitalize';

describe('Testing the capitalize function', function () {
	it('should exist', () => {
		expect(capitalize).to.not.be.undefined;
	});

	it('should capitalize the first word of every word in a sentence', function () {
		let str = 'hi there, how is it going?';
		let result = 'Hi There, How Is It Going?';

		expect(capitalize(str)).to.equal(result);
	});
});

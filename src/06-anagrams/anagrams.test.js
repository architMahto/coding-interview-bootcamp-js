import { expect } from 'chai';
import { anagrams } from './anagrams';

describe('Testing the anagrams function', function () {
	it('should exist', function () {
		expect(anagrams).to.not.be.undefined;
	});

	it('"hello" and "llohe"', () => {
		expect(anagrams('hello', 'llohe')).to.be.true;
	});

	it('"Whoa! Hi!" and "Hi! Whoa!"', () => {
		expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).to.be.true;
	});

	it('"One One" and "Two two two"', () => {
		expect(anagrams('One One', 'Two two two')).to.be.false;
	});

	it('"One one" and "One one c"', () => {
		expect(anagrams('One one', 'One one c')).to.be.false;
	});

	it('"A tree, a life, a bench" and "A tree, a fence, a yard"', () => {
		expect(
			anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
		).to.be.false;
	});
});

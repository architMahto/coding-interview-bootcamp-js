import { expect } from 'chai';
import Stack from './stack';

describe('Testing the Stack class', function () {
	it('should be a class', function () {
		expect(typeof Stack.prototype.constructor).to.equal('function');
	});

	it('should add and remove items', function () {
		let stack = new Stack();

		stack.push(1);
		expect(stack.pop()).to.equal(1);
		stack.push(2);
		expect(stack.pop()).to.equal(2);
	});

	it('should follow first in, last out', function () {
		let stack = new Stack();

		stack.push(1);
		stack.push(2);
		stack.push(3);

		expect(stack.pop()).to.equal(3);
		expect(stack.pop()).to.equal(2);
		expect(stack.pop()).to.equal(1);
	});

	describe('When peek is called', function () {
		it('should return the first element but not pop it', function () {
			let stack = new Stack();

			stack.push(1);
			stack.push(2);
			stack.push(3);

			expect(stack.peek()).to.equal(3);
			expect(stack.pop()).to.equal(3);

			expect(stack.peek()).to.equal(2);
			expect(stack.pop()).to.equal(2);

			expect(stack.peek()).to.equal(1);
			expect(stack.pop()).to.equal(1);
		});
	});
});

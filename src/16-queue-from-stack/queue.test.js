import { expect } from 'chai';
import Queue from './queue';

describe('Testing the creation of a Queue class from a Stack', function () {
	it('should be a class', function () {
		expect(typeof Queue.prototype.constructor).to.equal('function');
	});

	it('should add an element', function () {
		let queue = new Queue();

		expect(queue.add(1)).not.to.throw();
	});

	it('should remove an element', function () {
		let queue = new Queue();

		expect(queue.add(1)).not.to.throw();
		expect(queue.remove()).not.to.throw();
	});

	it('should maintain the order of elements', function () {
		let queue = new Queue();

		queue.add(1);
		queue.add(2);
		queue.add(3);

		expect(queue.remove()).to.equal(1);
		expect(queue.remove()).to.equal(2);
		expect(queue.remove()).to.equal(3);
		expect(queue.remove()).to.be.undefined;
	});

	describe('When testing the peek method', function () {
		it('should not remove the first element', function () {
			let queue = new Queue();

			queue.add(1);
			queue.add(2);

			expect(queue.peek()).to.equal(1);
			expect(queue.peek()).to.equal(1);
			expect(queue.remove()).to.equal(1);
			expect(queue.remove()).to.equal(2);
		});
	});
});

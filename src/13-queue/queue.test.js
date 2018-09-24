import { expect } from 'chai';
import Queue from './queue';

describe('Testing the Queue class', function () {
	it('should be a class', function () {
		expect(typeof Queue.prototype.constructor).to.equal('function');
	});

	it('should add elements to a queue', function () {
		let queue = new Queue();

		expect(queue.add(2)).not.to.throw();
	});

	it('should remove elements from a queue', function () {
		let queue = new Queue();

		expect(queue.add(2)).not.to.throw();
		expect(queue.remove()).not.to.throw();
	});

	it('should maintain the order of the elements', function () {
		let queue = new Queue();

		queue.add(1);
		queue.add(2);
		queue.add(3);
		expect(queue.remove()).to.equal(1);
		expect(queue.remove()).to.equal(2);
		expect(queue.remove()).to.equal(3);
		expect(queue.remove()).to.equal(undefined);
	});
});

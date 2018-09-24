import { expect } from 'chai';
import { weave } from './weave';
import Queue from './queue';

describe('Testing the peek function of the Queue class', function () {
	it('should be a class', function () {
		let queue = new Queue();

		expect(typeof queue.peek).to.equal('function');
	});

	it('should not remove the first value', function () {
		let queue = new Queue();

		queue.add(1);
		queue.add(2);

		expect(queue.peek()).to.equal(1);
		expect(queue.peek()).to.equal(1);
		expect(queue.remove()).to.equal(1);
		expect(queue.remove()).to.equal(2);
	});
});

describe('Testing the weave function', function () {
	it('should exist', function () {
		expect(weave).to.not.be.undefined;
	});

	it('should combine two queues', function () {
		const one = new Queue();
		one.add(1);
		one.add(2);
		one.add(3);
		one.add(4);

		const two = new Queue();
		two.add('one');
		two.add('two');
		two.add('three');
		two.add('four');

		const result = weave(one, two);

		expect(result.remove()).to.equal(1);
		expect(result.remove()).to.equal('one');
		expect(result.remove()).to.equal(2);
		expect(result.remove()).to.equal('two');
		expect(result.remove()).to.equal(3);
		expect(result.remove()).to.equal('three');
		expect(result.remove()).to.equal(4);
		expect(result.remove()).to.equal('four');
		expect(result.remove()).to.be.undefined;
	});
});

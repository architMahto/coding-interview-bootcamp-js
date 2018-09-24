import { expect } from 'chai';
import { LinkedList } from './linked-list';
import { midpoint } from './midpoint';

describe('Testing the midpoint function', function () {
	it('should exist', function () {
		expect(midpoint).to.not.be.undefined;
	});

	describe('When the list contains an odd number of elements', function () {
		it('should find the middle node', function () {
			let list = new LinkedList();

			list.insertLast('a');
			list.insertLast('b');
			list.insertLast('c');

			expect(midpoint(list).data).to.equal('b');
		});
	});

	describe('When the list contains an even number of elements', function () {
		it('should find the middle node', function () {
			let list = new LinkedList();

			list.insertLast('a');
			list.insertLast('b');
			list.insertLast('c');
			list.insertLast('d');

			expect(midpoint(list).data).to.equal('b');
		});
	});
});

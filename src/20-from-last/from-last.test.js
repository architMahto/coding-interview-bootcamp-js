import { expect } from 'chai';
import { LinkedList } from './linked-list';
import { fromLast } from './from-last';

describe('Testing the fromLast function', function () {
	it('should exist', function () {
		expect(fromLast).to.not.be.undefined;
	});

	it('should return the node that is n spaces away from the end', function () {
		let list = new LinkedList();

		list.insertLast('a');
		list.insertLast('b');
		list.insertLast('c');
		list.insertLast('d');
		list.insertLast('e');

		expect(fromLast(list, 3).data).to.equal('b');
	});
});

import { expect } from 'chai';
import { Node, LinkedList } from './linked-list';
import { circular } from './circular';

describe('Testing the circular function', function () {
	it('should exist', function () {
		expect(circular).to.not.be.undefined;
	});

	it('should detect circular linked list', function () {
		let list = new LinkedList();
		let a = new Node('a');
		let b = new Node('b');
		let c = new Node('c');

		list.head = a;
		a.next = b;
		b.next = c;
		c.next = b;

		expect(circular(list)).to.be.true;
	});

	it('should detect circular linked lists linked at the head', function () {
		let list = new LinkedList();
		let a = new Node('a');
		let b = new Node('b');
		let c = new Node('c');

		list.head = a;
		a.next = b;
		b.next = c;
		c.next = a;

		expect(circular(list)).to.be.true;
	});

	it('should detect non-circular linked lists', function () {
		let list = new LinkedList();
		let a = new Node('a');
		let b = new Node('b');
		let c = new Node('c');

		list.head = a;
		a.next = b;
		b.next = c;
		c.next = null;

		expect(circular(list)).to.be.false;
	});
});

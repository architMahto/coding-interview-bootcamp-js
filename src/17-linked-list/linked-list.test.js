import { expect } from 'chai';
import { LinkedList, Node } from './linked-list';

describe('Testing the Node class', function () {
	it('should be a class', function () {
		expect(typeof Node.prototype.constructor).to.equal('function');
	});

	it('should have the \'data\' and \'next\' properties', function () {
		const node = new Node('a', 'b');

		expect(node.data).to.equal('a');
		expect(node.next).to.equal('b');
	});
});

describe('Testing the LinkedList class', function () {
	it('should be a class', function () {
		expect(typeof LinkedList.prototype.constructor).to.equal('function');
	});

	describe('When testing the insertAt method', function () {
		it('should insert a new node at the 0 index when the list is empty', function () {
			let list = new LinkedList();

			list.insertAt('hi', 0);
			expect(list.getFirst().data).to.equal('hi');
		});

		it('should insert a new node at the beginning of the list when the list has elements', function () {
			let list = new LinkedList();

			list.insertLast('a');
			list.insertLast('b');
			list.insertLast('c');

			list.insertAt('hi', 0);

			expect(list.getAt(0).data).to.equal('hi');
			expect(list.getAt(1).data).to.equal('a');
			expect(list.getAt(2).data).to.equal('b');
			expect(list.getAt(3).data).to.equal('c');
		});

		it('should insert a new node at a middle index', function () {
			let list = new LinkedList();

			list.insertLast('a');
			list.insertLast('b');
			list.insertLast('c');
			list.insertLast('d');

			list.insertAt('hi', 2);

			expect(list.getAt(0).data).to.equal('a');
			expect(list.getAt(1).data).to.equal('b');
			expect(list.getAt(2).data).to.equal('hi');
			expect(list.getAt(3).data).to.equal('c');
			expect(list.getAt(4).data).to.equal('d');
		});

		it('should insert a new node at the end of a list', function () {
			let list = new LinkedList();

			list.insertLast('a');
			list.insertLast('b');
			list.insertAt('hi', 2);

			expect(list.getAt(0).data).to.equal('a');
			expect(list.getAt(1).data).to.equal('b');
			expect(list.getAt(2).data).to.equal('hi');
		});

		it('should insert a new node at an out of bounds index', function () {
			let list = new LinkedList();

			list.insertLast('a');
			list.insertLast('b');
			list.insertAt('hi', 30);

			expect(list.getAt(0).data).to.equal('a');
			expect(list.getAt(1).data).to.equal('b');
			expect(list.getAt(2).data).to.equal('hi');
		});
	});

	describe('When testing the insertFirst method', function () {
		it('should append a node to the start of the list', function () {
			let list = new LinkedList();

			list.insertFirst(1);
			expect(list.head.data).to.equal(1);

			list.insertFirst(2);
			expect(list.head.data).to.equal(2);
		});
	});

	describe('When testing the insertLast method', function () {
		it('should append a node to the end of the list', function () {
			let list = new LinkedList();

			list.insertFirst('a');
			list.insertLast('b');

			expect(list.size()).to.equal(2);
			expect(list.getLast().data).to.equal('b');
		});
	});

	describe('When testing the size method', function () {
		it('should return the number of items in the list', function () {
			let list = new LinkedList();

			expect(list.size()).to.equal(0);

			list.insertFirst(1);
			list.insertFirst(1);
			list.insertFirst(1);
			list.insertFirst(1);

			expect(list.size()).to.equal(4);
		});
	});

	describe('When testing the getAt method', function () {
		it('should return the node at the given index', function () {
			let list = new LinkedList();

			expect(list.getAt(10)).to.be.null;

			list.insertFirst(1);
			list.insertFirst(2);
			list.insertFirst(3);
			list.insertFirst(4);

			expect(list.getAt(0));
		});
	});

	describe('When testing the getFirst method', function () {
		it('should return the first element', function () {
			let list = new LinkedList();

			list.insertFirst(1);
			expect(list.getFirst().data).to.equal(1);

			list.insertFirst(2);
			expect(list.getFirst().data).to.equal(2);
		});
	});

	describe('When testing the getLast method', function () {
		it('should return the last element', function () {
			let list = new LinkedList();

			list.insertFirst(2);
			expect(list.getLast().data).to.equal(2);
			expect(list.getLast().next).to.be.null;

			list.insertFirst(1);
			expect(list.getLast().data).to.equal(2);
			expect(list.getLast().next).to.be.null;
		});
	});

	describe('When testing the clear method', function () {
		it('should empty out the list', function () {
			let list = new LinkedList();

			expect(list.size()).to.equal(0);

			list.insertFirst(1);
			list.insertFirst(1);
			list.insertFirst(1);
			list.insertFirst(1);

			expect(list.size()).to.equal(4);

			list.clear();

			expect(list.size()).to.equal(0);
		});
	});

	describe('When testing the removeAt method', function () {
		it('should not crash on an empty list', function () {
			let list = new LinkedList();

			list.removeAt(0).not.to.throw();
			list.removeAt(1).not.to.throw();
			list.removeAt(2).not.to.throw();
		});

		it('should not crash on an index out of bounds', function () {
			let list = new LinkedList();

			list.insertFirst('a');
			list.removeAt(1).not.to.throw();
		});

		it('should remove the first node', function () {
			let list = new LinkedList();

			list.insertLast(1);
			list.insertLast(2);
			list.insertLast(3);
			list.insertLast(4);

			expect(list.getAt(0).data).to.equal(1);

			list.removeAt(0);

			expect(list.getAt(0).data).to.equal(2);
		});

		it('should remove the node at the given index', function () {
			let list = new LinkedList();

			list.insertLast(1);
			list.insertLast(2);
			list.insertLast(3);
			list.insertLast(4);

			expect(list.getAt(1).data).to.equal(2);

			list.removeAt(1);

			expect(list.getAt(1).data).to.equal(3);
		});

		it('should remove the last node', function () {
			let list = new LinkedList();

			list.insertLast(1);
			list.insertLast(2);
			list.insertLast(3);
			list.insertLast(4);

			expect(list.getAt(3).data).to.equal(4);

			list.removeAt(3);

			expect(list.getAt(3)).to.equal(null);
		});
	});

	describe('When testing the removeFirst method', function () {
		it('should remove the first node from a list that is length 1', function () {
			let list = new LinkedList();

			list.insertFirst('a');
			list.removeFirst();

			expect(list.size()).to.equal(0);
			expect(list.getFirst()).to.be.null;
		});

		it('should remove the first node from a list that is length 3', function () {
			let list = new LinkedList();

			list.insertFirst('c');
			list.insertFirst('b');
			list.insertFirst('a');

			list.removeFirst();
			expect(list.size()).to.equal(2);
			expect(list.getFirst().data).to.equal('b');

			list.removeFirst();
			expect(list.size()).to.equal(1);
			expect(list.getFirst().data).to.equal('c');
		});
	});

	describe('When testing the removeLast method', function () {
		it('should remove the last node from a list that is empty', function () {
			let list = new LinkedList();

			expect(list.removeLast()).not.to.throw();
		});

		it('should remove the last node from a list that is length 1', function () {
			let list = new LinkedList();

			list.insertFirst('a');

			list.removeLast();

			expect(list.head).to.be.null;
		});

		it('should remove the last node from a list that is length 2', function () {
			let list = new LinkedList();

			list.insertFirst('b');
			list.insertFirst('a');

			list.removeLast();

			expect(list.size()).to.equal(1);
			expect(list.head.data).to.equal('a');
		});

		it('should remove the last node from a list that is length 3', function () {
			let list = new LinkedList();

			list.insertFirst('c');
			list.insertFirst('b');
			list.insertFirst('a');

			list.removeLast();

			expect(list.size()).to.equal(2);
			expect(list.head.data).to.equal('b');
		});
	});

	describe('When testing the forEach method', function () {
		it('should apply a transform to each node', function () {
			let list = new LinkedList();

			list.insertLast(1);
			list.insertLast(2);
			list.insertLast(3);
			list.insertLast(4);

			list.forEach(node => {
				node.data += 10;
			});

			expect(list.getAt(0).data).to.equal(11);
			expect(list.getAt(1).data).to.equal(12);
			expect(list.getAt(2).data).to.equal(13);
			expect(list.getAt(3).data).to.equal(14);
		});
	});

	describe('When testing for...of loops', function () {
		it('should work on a non-empty list', function () {
			let list = new LinkedList();

			list.insertLast(1);
			list.insertLast(2);
			list.insertLast(3);
			list.insertLast(4);

			for (let node of list) {
				node.data += 10;
			}

			expect(list.getAt(0).data).to.equal(11);
			expect(list.getAt(1).data).to.equal(12);
			expect(list.getAt(2).data).to.equal(13);
			expect(list.getAt(3).data).to.equal(14);
		});

		it('should work on an empty list', function () {
			let list = new LinkedList();

			let emptyListIteration = function()  {
				for (let node of list) {}
			};

			expect(emptyListIteration()).not.to.throw();
		});
	});
});

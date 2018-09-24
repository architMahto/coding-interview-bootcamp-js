import { expect } from 'chai';
import { Node } from './node';

describe('Testing the Binary Search Tree', function () {
	it('should be a class', function () {
		expect(typeof Node.prototype.constructor).to.equal('function');
	});

	it('should insert correctly', function () {
		let node = new Node(10);

		node.insert(5);
		node.insert(15);
		node.insert(17);

		expect(node.left.data).to.equal(5);
		expect(node.right.data).to.equal(15);
		expect(node.right.right.data).to.equal(17);
	});

	describe('When the contains method is called', function () {
		it('should return the node with the same data', function () {
			let node = new Node(10);
			node.insert(5);
			node.insert(15);
			node.insert(20);
			node.insert(0);
			node.insert(-5);
			node.insert(3);

			let three = node.left.left.right;
			expect(node.contains(3)).to.equal(three);
		});

		it('should return null if the node is not found', function () {
			let node = new Node(10);
			node.insert(5);
			node.insert(15);
			node.insert(20);
			node.insert(0);
			node.insert(-5);
			node.insert(3);

			expect(node.contains(9999)).to.equal(null);
		});
	});
});

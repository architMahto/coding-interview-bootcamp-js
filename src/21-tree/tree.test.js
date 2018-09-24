import { expect } from 'chai';
import { Node, Tree } from './tree';

describe('Testing the Node class', function () {
	it('should be a class', function () {
		expect(typeof Node.prototype.constructor).to.equal('function');
	});

	it('should have data and children properties', function () {
		let node = new Node('a');

		expect(node.data).to.equal('a');
		expect(node.children.length).to.equal(0);
	});

	it('should add children', function () {
		let node = new Node('a');

		node.add('b');
		expect(node.children.length).to.equal(1);
		expect(node.children[0].children).to.equal([]);
	});

	it('should remove children', function () {
		let node = new Node('a');

		node.add('b');
		expect(node.children.length).to.equal(1);

		node.remove('b');
		expect(node.children.length).to.equal(0);
	});
});

describe('Testing the Tree class', function () {
	it('starts empty', () => {
		let tree = new Tree();
		expect(tree.root).to.equal(null);
	});

	it('Can traverse bf', () => {
		let letters = [];
		let tree = new Tree();

		tree.root = new Node('a');
		tree.root.add('b');
		tree.root.add('c');
		tree.root.children[0].add('d');

		tree.traverseBF(node => {
			letters.push(node.data);
		});

		expect(letters).to.equal(['a', 'b', 'c', 'd']);
	});

	it('Can traverse DF', () => {
		let letters = [];
		let tree = new Tree();

		tree.root = new Node('a');
		tree.root.add('b');
		tree.root.add('d');
		tree.root.children[0].add('c');

		tree.traverseDF(node => {
			letters.push(node.data);
		});

		expect(letters).to.equal(['a', 'b', 'c', 'd']);
	});
});

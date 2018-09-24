import { expect } from 'chai';
import { Node } from './node';
import { levelWidth } from './level-width';

describe('Testing the levelWidth function', function () {
	it('should exist', function () {
		expect(levelWidth).to.not.be.undefined;
	});

	it('should return the number of nodes at the widest point', function () {
		let root = new Node(0);
		root.add(1);
		root.add(2);
		root.add(3);
		root.children[0].add(4);
		root.children[2].add(5);

		expect(levelWidth(root)).to.equal([1, 3, 2]);
	});
});

import { expect } from 'chai';
import { Node } from './node';
import { validate } from './validate';

describe('Testing the validate function', function () {
	it('should exist', function () {
		expect(validate).to.not.be.undefined;
	});

	it('should recognize a valid BST', function () {
		let node = new Node(10);

		node.insert(5);
		node.insert(10);
		node.insert(0);
		node.insert(20);

		expect(validate(node)).to.be.true;
	});

	it('should recognize an invalid BST', function () {
		let node  = new Node(10);

		node.insert(5);
		node.insert(10);
		node.insert(0);
		node.insert(20);

		node.left.left.right = new Node(999);

		expect(validate(node)).to.be.false;
	});
});

/** Class representing a node data structure */
export class Node {
	/**
	 * Creates the Node
	 *
	 * @param data
	 */
	constructor(data) {
		this.data = data;
		this.children = null;
	}

	add(data) {}

	remove(data) {}
}

/** Class representing a tree data structure */
export class Tree {
	/**
	 * Creates the Tree
	 *
	 */
	constructor() {
		this.root = null;
	}

	/**
	 * Traverses breadth-first across a tree
	 *
	 * @param func
	 */
	traverseBF(func) {}

	/**
	 * Traverses depth-first across a tree
	 *
	 * @param func
	 */
	traverseDF(func) {}
}

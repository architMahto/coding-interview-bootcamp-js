/** Class representing a node data structure */
export class Node {
	/**
	 * Creates a Node
	 *
	 * @param data
	 */
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	/**
	 * Finds the node in the tree with the same value
	 *
	 * @param data
	 * @returns {Node} Element with the same value
	 */
	contains(data) {}

	/**
	 * Creates a new node and inserts the new node at
	 * the appropriate location in the tree
	 *
	 * @param data
	 */
	insert(data) {}
}

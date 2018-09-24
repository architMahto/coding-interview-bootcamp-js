/** Class representing a node data structure */
export class Node {
	/**
	 * Creates a Node
	 *
	 * @param data
	 */
	constructor(data) {
		this.data = data;
		this.children = null;
	}

	/**
	 * Adds data to the children of a node
	 *
	 * @param data
	 */
	add(data) {
		this.children.push(new Node(data));
	}
}

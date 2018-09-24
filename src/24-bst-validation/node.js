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
	 * Creates a new node and inserts the new node at
	 * the appropriate location in the tree
	 *
	 * @param data
	 */
	insert(data) {
		if (data < this.data && this.left) {
			this.left.insert(data);
		} else if (data < this.data) {
			this.left = new Node(data);
		} else if (data > this.data && this.right) {
			this.right.insert(data);
		} else if (data > this.data) {
			this.right = new Node(data);
		}
	}
}

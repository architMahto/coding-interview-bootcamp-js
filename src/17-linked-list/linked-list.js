/** Class representing a node data structure */
export class Node {
	/**
	 * Creates a node
	 *
	 * @param data
	 * @param next
	 */
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

/** Class representing a linked list data structure */
export class LinkedList {
	/**
	 * Creates a linked list
	 */
	constructor() {
		this.head = null;
	}

	/**
	 * Iterates over a linked list
	 *
	 * @returns {IterableIterator<*>} An iterator over a linked list
	 */
	*[Symbol.iterator]() {}

	/**
	 * Removes all nodes from a linked list
	 */
	clear() {}

	/**
	 * Applies a transformation function on each node of the
	 * linked list
	 *
	 * @param func
	 */
	forEach(func) {}

	/**
	 * Retrieves the element at the given index
	 *
	 * @param index
	 * @returns {any} Element at index
	 */
	getAt(index) {}

	/**
	 * Retrieves the first element of the linked list
	 *
	 * @returns {any} The first element in the linked list
	 */
	getFirst() {}

	/**
	 * Retrieves the last element of the linked list
	 *
	 * @returns {any} The last element in the linked list
	 */
	getLast() {}

	/**
	 * Inserts an element in the linked list at the given index
	 *
	 * @param index
	 */
	insertAt(index) {}

	/**
	 * Inserts an element at the beginning of the linked list
	 *
	 */
	insertFirst() {}

	/**
	 * Inserts an element at the end of the linked list
	 *
	 */
	insertLast() {}

	/**
	 * Removes an element from the linked list at the given index
	 *
	 * @param index
	 */
	removeAt(index) {}

	/**
	 * Removes the first element from the linked list
	 *
	 */
	removeFirst() {}

	/**
	 * Removes the last element from the linked list
	 *
	 */
	removeLast() {}

	/**
	 * Calculates the size of the linked list
	 *
	 * @returns {number} Size of linked list
	 */
	size() {}
}

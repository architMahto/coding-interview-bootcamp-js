/** Class representing a queue data structure */
class Queue {
	/**
	 * Creates a queue
	 */
	constructor() {
		this.data = [];
	}

	/**
	 * Adds a record to the queue
	 *
	 * @param record
	 */
	add(element) {
		this.data.unshift(element);
	}

	/**
	 * Finds the first element without removing it
	 *
	 * @returns {any} The first element
	 */
	peek() {
		return this.data[0];
	}

	/**
	 * Removes the first element from the queue
	 *
	 * @returns {any} Returns the last element from a queue
	 */
	remove() {
		return this.data.pop();
	}
}

export default Queue;

/** Class representing an events library */
export class Events {
	/**
	 * Registers an event handler on event
	 *
	 * @param eventName
	 * @param callback
	 */
	on(eventName, callback) {}

	/**
	 * Triggers all callbacks associated with an event
	 *
	 * @param eventName
	 */
	trigger(eventName) {}

	/**
	 * Removes all event handlers associated with an event
	 *
	 * @param eventName
	 */
	off(eventName) {}
}

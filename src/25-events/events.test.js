import { expect } from 'chai';
import { spy } from 'sinon';
import { Events } from './events';

describe('Testing the Events class', function () {
	it('should register a single event and trigger that event', function () {
		const events = new Events();

		const cb1 = spy();

		events.on('click', cb1);
		events.trigger('click');

		expect(cb1.getCalls().length).to.equal(1);
	});

	it('should register multiple events and trigger those events', function () {
		const events = new Events();

		const cb1 = spy();
		const cb2 = spy();

		events.on('click', cb1);
		events.on('click', cb2);
		events.trigger('click');

		expect(cb1.getCalls().length).to.equal(1);
		expect(cb2.getCalls().length).to.equal(1);
	});

	it('should trigger events multiple times', function () {
		const events = new Events();

		const cb1 = spy();
		const cb2 = spy();

		events.on('click', cb1);
		events.trigger('click');
		events.on('click', cb2);
		events.trigger('click');
		events.trigger('click');

		expect(cb1.getCalls().length).to.equal(3);
		expect(cb2.getCalls().length).to.equal(2);
	});

	it('Events can have different names', function () {
		const events = new Events();

		const cb1 = spy();
		const cb2 = spy();

		events.on('click', cb1);
		events.trigger('click');
		events.on('hover', cb2);
		events.trigger('click');
		events.trigger('hover');

		expect(cb1.getCalls().length).to.equal(2);
		expect(cb2.getCalls().length).to.equal(1);
	});

	it('Events can be toggled off', function () {
		const events = new Events();

		const cb1 = spy();
		const cb2 = spy();

		events.on('hover', cb2);

		events.on('click', cb1);
		events.trigger('click');
		events.off('click');
		events.trigger('click');

		events.trigger('hover');

		expect(cb1.getCalls().length).to.equal(1);
		expect(cb2.getCalls().length).to.equal(1);
	});
});

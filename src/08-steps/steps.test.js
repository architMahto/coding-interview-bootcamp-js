import { expect } from 'chai';
import { spy } from 'sinon';
import { steps } from './steps';

describe('Testing the steps method', function () {
	beforeEach(function () {
		spy(console, 'log');
	});

	it('should exist', function () {
		expect(steps).to.not.be.undefined;
	});

	it('should call console.log 1 time for num = 1', function () {
		steps(1);

		expect(console.log.getCalls().length).to.equal(1);
		expect(console.log.getCall(0).args[0]).to.equal('#');
	});

	it('should call console.log 2 times for num = 2', function () {
		steps(2);

		expect(console.log.getCalls().length).to.equal(2);
		expect(console.log.getCall(0).args[0]).to.equal('# ');
		expect(console.log.getCall(1).args[0]).to.equal('##');
	});

	it('should call console.log 3 times for num = 3', function () {
		steps(3);

		expect(console.log.getCalls().length).to.equal(3);
		expect(console.log.getCall(0).args[0]).to.equal('# ');
		expect(console.log.getCall(1).args[0]).to.equal('##');
		expect(console.log.getCall(2).args[0]).to.equal('###');
	});

	afterEach(function () {
		console.log.restore();
	});
});

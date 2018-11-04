import { expect } from 'chai';
import { spy } from 'sinon';
import { iterativeSteps, recursiveSteps } from './steps';

describe.only('Testing the iterativeSteps method', function () {
	beforeEach(function () {
		spy(console, 'log');
	});

	it('should exist', function () {
		expect(iterativeSteps).to.not.be.undefined;
	});

	it('should call console.log 1 time for num = 1', function () {
		iterativeSteps(1);

		expect(console.log.getCalls().length).to.equal(1);
		expect(console.log.getCall(0).args[0]).to.equal('#');
	});

	it('should call console.log 2 times for num = 2', function () {
		iterativeSteps(2);

		expect(console.log.getCalls().length).to.equal(2);
		expect(console.log.getCall(0).args[0]).to.equal('# ');
		expect(console.log.getCall(1).args[0]).to.equal('##');
	});

	it('should call console.log 3 times for num = 3', function () {
		iterativeSteps(3);

		expect(console.log.getCalls().length).to.equal(3);
		expect(console.log.getCall(0).args[0]).to.equal('#  ');
		expect(console.log.getCall(1).args[0]).to.equal('## ');
		expect(console.log.getCall(2).args[0]).to.equal('###');
	});

	afterEach(function () {
		console.log.restore();
	});
});

describe.only('Testing the recursiveSteps method', function () {
	beforeEach(function () {
		spy(console, 'log');
	});

	it('should exist', function () {
		expect(recursiveSteps).to.not.be.undefined;
	});

	it('should call console.log 1 time for num = 1', function () {
		recursiveSteps(1);

		expect(console.log.getCalls().length).to.equal(1);
		expect(console.log.getCall(0).args[0]).to.equal('#');
	});

	it('should call console.log 2 times for num = 2', function () {
		recursiveSteps(2);

		expect(console.log.getCalls().length).to.equal(2);
		expect(console.log.getCall(0).args[0]).to.equal('# ');
		expect(console.log.getCall(1).args[0]).to.equal('##');
	});

	it('should call console.log 3 times for num = 3', function () {
		recursiveSteps(3);

		expect(console.log.getCalls().length).to.equal(3);
		expect(console.log.getCall(0).args[0]).to.equal('#  ');
		expect(console.log.getCall(1).args[0]).to.equal('## ');
		expect(console.log.getCall(2).args[0]).to.equal('###');
	});

	afterEach(function () {
		console.log.restore();
	});
});

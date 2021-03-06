import { expect } from 'chai';
import { spy } from 'sinon';
import { pyramids } from './pyramids';

describe('Testing the pyramids method', function () {
	beforeEach(function () {
		spy(console, 'log');
	});

	it('should exist', function () {
		expect(pyramids).to.not.be.undefined;
	});

	it('should call console.log 2 times num = 2', function () {
		pyramids(2);

		expect(console.log.getCalls().length).to.equal(2);
		expect(console.log.getCall(0).args[0]).to.equal(' # ');
		expect(console.log.getCall(1).args[0]).to.equal('###');
	});

	it('should call console.log 3 times num = 3', function () {
		pyramids(3);

		expect(console.log.getCalls().length).to.equal(3);
		expect(console.log.getCall(0).args[0]).to.equal('  #  ');
		expect(console.log.getCall(1).args[0]).to.equal(' ### ');
		expect(console.log.getCall(2).args[0]).to.equal('#####');
	});

	it('should call console.log 4 times num = 4', function () {
		pyramids(4);

		expect(console.log.getCalls().length).to.equal(4);
		expect(console.log.getCall(0).args[0]).to.equal('   #   ');
		expect(console.log.getCall(1).args[0]).to.equal('  ###  ');
		expect(console.log.getCall(2).args[0]).to.equal(' ##### ');
		expect(console.log.getCall(3).args[0]).to.equal('#######');
	});

	afterEach(function () {
		console.log.restore();
	});
});

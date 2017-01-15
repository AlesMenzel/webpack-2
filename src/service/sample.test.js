import chai from 'chai'
import Sample from './sample'

const expect = chai.expect;

describe('Sample', function() {
	it('getZero() should return 0', function() {
		const sampleService = new Sample();
		expect(sampleService.getZero()).to.equal(0);
	});
});

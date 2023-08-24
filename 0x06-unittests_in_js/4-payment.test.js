const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');


describe('sendPaymentRequestToApi Test Suite', function () {
  // create the spy / wrapper of an existing function
  const consoleSpy = sinon.spy(console, 'log');

  it('validate Utils function with spy', function () {
    const calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);


    // run the function with the parameters
    sendPaymentRequestToApi(100, 20);
    // check that the stub is being called with type = SUM, a = 100, and b = 20
    expect(calcNumStub.calledWith('SUM', 100, 20)).to.be.true;
    // check that the stub always return the same number 10
    expect(calcNumStub.alwaysReturned(10)).to.be.true;

    // check with spy that console.log is logging the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    calcNumStub.restore();
    consoleSpy.restore();
  });
});

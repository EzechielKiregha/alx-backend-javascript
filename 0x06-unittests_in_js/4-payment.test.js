const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('should spy on utils.calculatnumber', () => {
    const myStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const myConsoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(myStub.calledOnce).to.be.true;
    expect(myStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(myConsoleLogSpy.calledOnce).to.be.true;
    expect(myConsoleLogSpy.alwaysCalledWithExactly('The total is: 10')).to.be
      .true;

    myStub.restore();
    myConsoleLogSpy.restore();
  });
});

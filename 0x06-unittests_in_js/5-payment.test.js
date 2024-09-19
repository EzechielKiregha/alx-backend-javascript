const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  let myConsoleLogSpy;
  beforeEach(() => {
    myConsoleLogSpy = sinon.spy(console, 'log');
  });
  it('calls sendPaymentRequestToAPI with 100, and 20', () => {
    const myCalcNumberStubOne = sinon
      .stub(Utils, 'calculateNumber')
      .returns(120);
    sendPaymentRequestToApi(100, 20);

    expect(myCalcNumberStubOne.calledOnce).to.be.true;
    expect(myCalcNumberStubOne.alwaysCalledWithExactly('SUM', 100, 20)).to.be.true;
    expect(myConsoleLogSpy.calledOnce).to.be.true;
    expect(myConsoleLogSpy.alwaysCalledWithExactly('The total is: 120')).to.be.true;

    myCalcNumberStubOne.restore();
  });

  it('calls sendPaymentRequestToAPI with 10, and 10', () => {
    const myCalcNumberStubTwo = sinon
      .stub(Utils, 'calculateNumber')
      .returns(20);
    sendPaymentRequestToApi(10, 10);

    expect(myCalcNumberStubTwo.calledOnce).to.be.true;
    expect(myCalcNumberStubTwo.alwaysCalledWithExactly('SUM', 10, 10)).to.be.true;
    expect(myConsoleLogSpy.calledOnce).to.be.true;
    expect(myConsoleLogSpy.alwaysCalledWithExactly('The total is: 20')).to.be.true;

    myCalcNumberStubTwo.restore();
  });

  afterEach(() => {
    myConsoleLogSpy.restore();
  });
});

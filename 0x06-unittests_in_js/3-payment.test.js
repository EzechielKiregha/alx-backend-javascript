const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should spy on utils.calculatnumber', () => {
    const mySpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(mySpy);
    sinon.assert.calledOnceWithExactly(mySpy, 'SUM', 100, 20);

    mySpy.restore();
  });
});

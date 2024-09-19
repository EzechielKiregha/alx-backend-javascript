const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentToken', () => {
  it('is expected to resolve when success is true', done => {
    getPaymentTokenFromAPI(true).then(res => {
      expect(res).to.equal({ data: 'Successful response from the API' });
    });
    done();
  });

  it('is expected to do nothing when success is false', done => {
    getPaymentTokenFromAPI(false).then(res => {
      expect(res).to.equal();
    });
    done();
  });
});

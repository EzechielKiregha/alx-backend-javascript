const chai = require('chai');
const request = require('request');

const { expect } = chai;

describe('Index Page', () => {
  const uri = 'http://localhost:7865/';
  const method = 'GET';

  it('expects to get 200 statuscode', done => {
    request({ uri, method }, (error, response, body) => {
      done();
      expect(response.statusCode).to.equal(200);
    });
  });

  it('expects to get welcome message', done => {
    request({ uri, method }, (error, response, body) => {
      done();
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});

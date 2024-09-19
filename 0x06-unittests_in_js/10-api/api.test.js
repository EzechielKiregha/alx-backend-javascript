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

describe('Cart page', () => {
  const method = 'GET';

  it('expects to get 200 statuscode', done => {
    request(
      { uri: 'http://localhost:7865/cart/90', method },
      (error, response, body) => {
        done();
        expect(response.statusCode).to.equal(200);
      }
    );
  });

  it('expects correct message', done => {
    request(
      { uri: 'http://localhost:7865/cart/81', method },
      (error, response, body) => {
        done();
        expect(body).to.contain('Payment methods for cart 81');
      }
    );
  });

  it('expects to get >=404 statuscode', done => {
    request(
      { uri: 'http://localhost:7865/cart/hello', method },
      (error, response, body) => {
        done();
        expect(response.statusCode).to.equal(404);
      }
    );
  });
});

describe('Available payments page', () => {
  const method = 'GET';

  it('expects to get 200 statuscode', done => {
    request(
      { uri: 'http://localhost:7865/available_payments', method },
      (error, response, body) => {
        done();
        expect(response.statusCode).to.equal(200);
      }
    );
  });

  it('expects correct message', done => {
    request(
      { uri: 'http://localhost:7865/available_payments', method },
      (error, response, body) => {
        done();
        data = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(body).to.contain(JSON.stringify(data));
      }
    );
  });
});

describe('Login Page', () => {
  const method = 'POST';

  it('expects to get 200 statuscode', done => {
    request(
      {
        uri: 'http://localhost:7865/login',
        method,
        form: { userName: 'Betty' },
      },
      (error, response, body) => {
        done();
        expect(response.statusCode).to.equal(200);
        expect(body).to.contain('Welcome Betty');
      }
    );
  });

  it('expects correct message', done => {
    request(
      {
        uri: 'http://localhost:7865/login',
        method,
        form: { username: 'Betty' },
      },
      (error, response, body) => {
        done();
        expect(response.statusCode).to.equal(404);
      }
    );
  });
});

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 7865;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;

  res.statusCode = 200;
  res.send('Payment methods for cart ' + id);
});

app.get('/available_payments', (req, res) => {
  res.statusCode = 200;
  data = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.send(data);
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;

  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log('API available on localhost port ' + PORT);
});

module.exports = app;

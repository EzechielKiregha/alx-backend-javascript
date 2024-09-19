const express = require('express');

const PORT = 7865;
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log('API available on localhost port ' + PORT);
});

module.exports = app;

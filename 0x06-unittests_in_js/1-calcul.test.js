const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('shoud return 6 when type = SUM, a = 1.4, and b = 4.5', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('shoud return Error string when divided by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('shoud return 0.2 when type = DIVIDE, a = 1.4, and b = 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('shoud return -4 when type = SUBTRACT, a = 1.4, and b = 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});

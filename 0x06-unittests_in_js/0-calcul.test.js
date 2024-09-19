const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when you add 1 and 3', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('should return 5 when you add 1 and 3.7', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when you add 1.2 and 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when you add 1.5 and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 6 when you add 1.5 and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 2 when you add -1 and 3', () => {
    assert.equal(calculateNumber(-1, 3), 2);
  });

  it('should return 23 when you add 0.44 and 23.01', () => {
    assert.equal(calculateNumber(0.44, 23.01), 23);
  });

  it('should return 5 when you add 5 and -.01', () => {
    assert.equal(calculateNumber(5, -0.01), 5);
  });

  it('should return -28 when you add -5 and 23.01', () => {
    assert.equal(calculateNumber(-5, -23.01), -28);
  });
});

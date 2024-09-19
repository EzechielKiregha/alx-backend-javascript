const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  it('shoud return 6 when type = SUM, a = 1.4, and b = 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('shoud return Error string when divided by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.a('string');
  });

  it('shoud return 0.2 when type = DIVIDE, a = 1.4, and b = 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.a('number');
  });

  it('shoud return -4 when type = SUBTRACT, a = 1.4, and b = 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

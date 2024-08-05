import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function () {
  it('should return the sum of two rounded numbers when type is SUM', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return the difference of two rounded numbers when type is SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return the quotient of two rounded numbers when type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});

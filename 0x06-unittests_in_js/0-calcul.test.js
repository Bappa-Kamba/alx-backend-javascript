import { expect } from 'chai';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', function () {
  it('should return the sum of two rounded numbers', function () {
    expect(calculateNumber(1.4, 4.5)).to.equal(6);
  });

  it('should handle edge cases', function () {
    expect(calculateNumber(1.2, 4.8)).to.equal(6);
    expect(calculateNumber(1.5, 4.5)).to.equal(7);
  });
});

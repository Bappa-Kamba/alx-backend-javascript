// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1.4 and 2.6', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when inputs are 1.5 and 2.5', function() {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return -3 when inputs are -1.4 and -2.5', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.5), -3);
  });

  it('should return 0 when inputs are 0.4 and 0.4', function() {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should return 1 when inputs are -0.4 and 1.5', function() {
    assert.strictEqual(calculateNumber(-0.4, 1.5), 1);
  });
});

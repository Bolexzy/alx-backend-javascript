const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('Test Suite', function () {
  it('Test first argument float', function() {
    assert.strictEqual(calculateNumber(1.1, 2), 3);
    assert.equal(calculateNumber(1.2, 2), 3);
  });

  it('Test second argument float', function() {
    assert.equal(calculateNumber(1, 2.1), 3);
    assert.equal(calculateNumber(1, 2.3), 3);
  });

  it('Test both argument float', function() {
    assert.equal(calculateNumber(1.0, 2.0), 3);
    assert.equal(calculateNumber(1.2, 2.4), 3);
  });
});

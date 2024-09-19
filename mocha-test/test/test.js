const assert = require('assert');
const add = require('../index')

describe('add function', function () {
  describe('test add function', function () {
    it('should return the sum of two number', function () {
      const a = 5;
      const b = 3;
      assert.equal(add(a, b), a + b);
    });
  });
});
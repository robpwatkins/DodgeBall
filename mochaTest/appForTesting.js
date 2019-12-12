const assert = require('chai').assert;

function testFunk() {
  return 'heyoo';
}

describe('testFunk()', function(){
  it('app should return heyoo', function(){
    testFunk();
    assert.equal(testFunk(), 'heyoo');
  });
});
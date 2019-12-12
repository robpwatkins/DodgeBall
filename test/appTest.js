const assert = require('chai').assert;
const app = require('../firstTry');

describe('firstTry', function(){
  it('should return heyoo', function(){
    let result = app.testThat()
    assert.equal(result, 'heyoo');
  })
})
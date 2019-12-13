// import {testWorking} from './firstTry.js';

const assert = require('chai').assert;
const app = require('../firstTry');

// describe('firstTry', function(){
//   it('should return heyoo', function(){
//     let result = app.testThat()
//     assert.equal(result, 'heyoo');
//   })
// })

describe('testWorking', function(){
  it('should return cmon now', function(){
    assert.equal(app.testWorking(), 'cmon now');
  })
})

describe('omgThisWorks', function(){
  it('should return omg this works!', function(){
    assert.equal(app.omgThisWorks(), 'omg this works!');
  })
})


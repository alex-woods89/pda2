var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

// this.previousOperator = null; // the last operator the user clicked
// this.previousTotal = 0;       // the total of the previous operation
// this.newTotal = true;         // whether the previous operation has just been calculated
// this.runningTotal = 0;        // the current value to operate on the previous total

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });



  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  }),

  it('it should add 1 + 4 to get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1)
    const actual = 5;
    assert.strictEqual(actual, calculator.runningTotal )
  }),

  it('should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.strictEqual(3, calculator.runningTotal)
  }),

  it('multiply 3 by 5 and get 15', function (){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.strictEqual(15, calculator.runningTotal)
  }),

  it('divide 21 by 7 and get 3', function (){
   calculator.previousTotal = 21
   calculator.divide(7)
   assert.strictEqual(3, calculator.runningTotal)
  }),

  it('concatenate multiple number button clicks', function (){
    calculator.numberClick(3)
    calculator.numberClick(3)
    assert.strictEqual(33, calculator.runningTotal)
  }),

  it('chain multiple operations together', function (){
    calculator.operatorClick('*')
    assert.strictEqual(0, calculator.previousTotal)

  }),

  it('clear the running total without affecting the calculation', function(){
    calculator.add(5)
    calculator.clearClick()
    assert.strictEqual(0, calculator.runningTotal)
  })
});

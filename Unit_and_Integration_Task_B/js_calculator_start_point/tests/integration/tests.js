const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  xit('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  }),

  xit('the number buttons should update the display of the running total', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('32')
  }),

  xit('Do the arithmetical operations update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  }),

  it('Can multiple operations be chained together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  }),
  xit('Is the output as expected for a range of numbers', function (){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.75')
  }),

  it('What does the code do in exceptional circumstances? Specifically, if you divide by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

});

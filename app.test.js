const calc = require('../src/calculator');

const assert = require('assert');
const describe = require('mocha').describe;
const it = require('mocha').it;

describe('Unit Testing', function () {
  describe('add', function () {
    it('should return sum of input', function () {
      assert.equal(calc.add(5,10) ,15);
    });
  });
  describe('sub', function () {
    it('should return substracted value of input', function () {
      assert.equal(calc.sub(10,5) ,5);
    });
  });
  describe('mul', function () {
    it('should return product of input', function () {
      assert.equal(calc.mul(5,10) ,50);
    });
  });
  describe('div', function () {
    it('should return difference of input', function () {
      assert.equal(calc.div(10,5) ,2);
    });
  });
});

describe('Functional Testing', function(){
  describe('Calculator',function(){
    it('+ operation', function(){
      assert.equal(calc.calculator(5,10,'+'),15);
    });
    it('- operation', function(){
      assert.equal(calc.calculator(10,5,'-'),5);
    });
    it('* operation', function(){
      assert.equal(calc.calculator(5,10,'*'),50);
    });
    it('/ operation', function(){
      assert.equal(calc.calculator(8,4,'/'),2);
    });

    it('Invalid operation', function(){
      assert.equal(calc.calculator(8,4,'%'),'Wrong operator');
    });
  });
});
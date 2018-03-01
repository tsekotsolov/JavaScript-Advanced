let expect = require('chai').expect;
const createCalculator = require('../P07_addSubtract');

describe("createCalculator()", function () {
  let calc;
  beforeEach(function () {
    calc = createCalculator();
  });

  //ADD functionality tests
  it("should return 5", function () {
    calc.add(3);
    calc.add(2);
    expect(calc.get()).to.be.equal(5);
  });

  it("should return -1", function () {
    calc.add(0);
    calc.add(-1);
    expect(calc.get()).to.be.equal(-1);
  });

  it("should return -100", function () {
    calc.add(-99);
    calc.add(-1);
    expect(calc.get()).to.be.equal(-100);
  });
  it("should return -100", function () {
    calc.add('-99');
    calc.add(-1);
    expect(calc.get()).to.be.equal(-100);
  });
  it("should return 0", function () {
    calc.add(0);
    calc.add(0);
    expect(calc.get()).to.be.equal(0);
  });

  it("should return 1.3", function () {
    calc.add(0.8);
    calc.add(0.5);
    expect(calc.get()).to.be.equal(1.3);
  });
  it("should return NaN", function () {
    calc.add([-99,6]);
    calc.add(-1);
    expect(calc.get()).to.be.NaN;
  });


  
   //SUBTRACT functionality tests

   it("should return -5", function () {
    calc.subtract(3);
    calc.subtract(2);
    expect(calc.get()).to.be.equal(-5);
  });

  it("should return -4", function () {
    calc.subtract(5);
    calc.subtract(-1);
    expect(calc.get()).to.be.equal(-4);
  });

  it("should return 100", function () {
    calc.subtract(-99);
    calc.subtract(-1);
    expect(calc.get()).to.be.equal(100);
  });
  it("should return 100", function () {
    calc.subtract('-99');
    calc.subtract(-1);
    expect(calc.get()).to.be.equal(100);
  });
  it("should return 0", function () {
    calc.subtract(0);
    calc.subtract(0);
    expect(calc.get()).to.be.equal(0);
  });

  it("should return -10.5", function () {
    calc.subtract(12);
    calc.subtract(-1.5);
    expect(calc.get()).to.be.equal(-10.5);
  });
  it("should return NaN", function () {
    calc.subtract([-99,6]);
    calc.subtract(-1);
    expect(calc.get()).to.be.NaN;
  });

});
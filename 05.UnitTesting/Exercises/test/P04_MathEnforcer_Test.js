
let expect = require('chai').expect;
const mathEnforcer = require('../P04_MathEnforcer');

describe("MathEnforcerTests", function () {

  describe("Test Add Five Functionality", function () {

    it("ADD 5 should return 9", function () {
      let result = mathEnforcer.addFive(4);
      expect(result).to.be.equal(9);
    });

    it("ADD 5 should return undefined", function () {
      let result = mathEnforcer.addFive("Gosho");
      expect(result).to.be.undefined;
    });

    it("ADD 5 should return 4", function () {
      let result = mathEnforcer.addFive(-1);
      expect(result).to.be.equal(4);
    });

    it("ADD 5 should return 5.5", function () {
      let result = mathEnforcer.addFive(0.5);
      expect(result).to.be.equal(5.5);
    });
    
  });

  describe("Test Subtract TEN Functionality", function () {

    it("Subtract 10 should return 9", function () {
      let result = mathEnforcer.subtractTen(19);
      expect(result).to.be.equal(9);
    });

    it("Subtract 10 should return undefined", function () {
      let result = mathEnforcer.subtractTen("test");
      expect(result).to.be.undefined;
    });

    it("Subtract 10 should return -21", function () {
      let result = mathEnforcer.subtractTen(-11);
      expect(result).to.be.equal(-21);
    });

    it("Subtract 10 should return -4.5", function () {
      let result = mathEnforcer.subtractTen(5.5);
      expect(result).to.be.equal(-4.5);
    });

 

  });

  describe("Test SUM Functionality", function () {

    it("Sum should return 10", function () {
      let result = mathEnforcer.sum(5,5);
      expect(result).to.be.equal(10);
    });

    it("Sum should return undefined", function () {
      let result = mathEnforcer.sum("test",5);
      expect(result).to.be.undefined;
    });

    it("Sum should return -95", function () {
      let result = mathEnforcer.sum(-100,5);
      expect(result).to.be.equal(-95)
    });

    it("Sum should return //7.5", function () {
      let result = mathEnforcer.sum(7.5,5);
      expect(result).to.be.equal(12.5)
    });
    
    it("Sum should return //undefined", function () {
      let result = mathEnforcer.sum(5,"test");
      expect(result).to.be.undefined;
    });

    it("Sum should return //-95", function () {
      let result = mathEnforcer.sum(5,-100);
      expect(result).to.be.equal(-95)
    });

    it("Sum should return //7.5", function () {
      let result = mathEnforcer.sum(5,7.5);
      expect(result).to.be.equal(12.5)
    });

  });

});



let expect = require('chai').expect;
const Sumator = require('../sumator');

describe("Sumator Tests", function () {
  let sumator;
  beforeEach(function () {
    sumator = new Sumator();
  });

  describe("Test if functions exist", function () {
    
    it("Test if add() exsists ", function () {
      expect(Sumator.prototype).to.ownProperty('add');
    });

    it("Test if sumNums() ", function () {
      expect(Sumator.prototype).to.ownProperty('sumNums');
    });

    it("Test if removeByFilter()", function () {
      expect(Sumator.prototype).to.ownProperty('removeByFilter');
    });

    it("Test if toString()", function () {
      expect(Sumator.prototype).to.ownProperty('toString');
    });
  
  });
  describe("Test initial state", function () {
    it("Test if data is empty", function () {

      expect(sumator.data.length).to.be.equal(0);
    });
  });

  describe("Test ADD functionality", function () {
    it("Test .add with numbers", function () {

      sumator.add(5);
      sumator.add(11);
      sumator.add(-11)

      expect(sumator.toString()).to.be.equal('5, 11, -11');
    });

    it("Test .add with strings", function () {

      sumator.add('yes');
      sumator.add('no');

      expect(sumator.toString()).to.be.equal('yes, no');
    });

    it("Test .add with objects", function () {

      sumator.add({
        yes: 1
      });
      sumator.add({
        no: 2
      });

      expect(sumator.toString()).to.be.equal('[object Object], [object Object]');
    });

    it("Test .add with array", function () {
      sumator.add(['yes']);
      sumator.add([1]);
      expect(sumator.toString()).to.be.equal('yes, 1');
    });

    it("Test .add with mixed data", function () {
      sumator.add([2]);
      sumator.add('string');
      sumator.add(5);
      sumator.add({
        pos: 1
      })

      expect(sumator.toString()).to.be.equal('2, string, 5, [object Object]');
    });

  });

  describe("Test SUM functionality", function () {
    it("Test with no number in the  array", function () {
      sumator.add('Misho');
      sumator.add("8");
      sumator.add({});
      sumator.add([8, 11])
      expect(sumator.sumNums()).to.be.equal(0);
    });

    it("Test only with numbers in the array", function () {
      sumator.add(4);
      sumator.add(8);
      sumator.add(3);
      sumator.add(1)
      expect(sumator.sumNums()).to.be.equal(16);
    });

    it("Test with an empty array", function () {
      expect(sumator.sumNums()).to.be.equal(0);
    });

    it("Test only with mixed data in the array", function () {
      sumator.add(4);
      sumator.add({
        5: 5
      });
      sumator.add("Gogo");
      sumator.add([14, 12, 8])
      expect(sumator.sumNums()).to.be.equal(4);
    });

  });

  describe("Test Filter functionality", function () {
    it("Test with x=>x%2!=0", function () {
      sumator.add(7)
      sumator.add(11);
      sumator.add(4);
      sumator.add(2)
      sumator.removeByFilter(x => x % 2 != 0)
      expect(sumator.toString()).to.be.equal("4, 2");
    });

    it("Test with a => a === 5", function () {
      sumator.add([5])
      sumator.add("Sasho");
      sumator.add(5)
      sumator.removeByFilter(a => a === 5)
      expect(sumator.toString()).to.be.equal("5, Sasho");
    });

    it("Test with with empty array ", function () {

      sumator.removeByFilter(a => a === 5)
      expect(sumator.toString()).to.be.equal("(empty)");
    });
  });


  describe("Test toString() functionality", function () {
    
    it("Test with with an empty array ", function () {
      expect(sumator.toString()).to.be.equal("(empty)");
    });

    it("Test with array with data ", function () {
      sumator.add(4)
      sumator.add(11)
      expect(sumator.toString()).to.be.equal("4, 11");
    });
  });

});
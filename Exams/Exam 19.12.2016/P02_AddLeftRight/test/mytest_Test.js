let expect = require('chai').expect;
const makeList = require('../functionToTest');

describe("Test functionality", function () {

  let list;
  beforeEach(function () {
    list = makeList();
  });

  describe("Test Initial state", function () {
    it("Initial state should return []", function () {

      expect(list.toString()).to.be.equal('');
    });

  })

  describe("Test addLeft()", function () {
    
    it("test with one item", function () {
      list.addLeft(7)
      expect(list.toString()).to.be.equal('7');
    });

    it("test with two items", function () {
      list.addLeft(7)
      list.addLeft("gogo")
      expect(list.toString()).to.be.equal('gogo, 7');
    });

    it("test with three items", function () {
      list.addLeft(7);
      list.addLeft("gogo");
      list.addLeft([57,54,78])
      expect(list.toString()).to.be.equal('57,54,78, gogo, 7');
    });

  })


  describe("Test addRight()", function () {
    
    it("test with one item", function () {
      list.addRight(7)
      expect(list.toString()).to.be.equal('7');
    });

    it("test with two items", function () {
      list.addRight(7)
      list.addRight("gogo")
      expect(list.toString()).to.be.equal('7, gogo');
    });

    it("test with three items", function () {
      list.addRight(7);
      list.addRight("gogo");
      list.addRight([57,54,78])
      expect(list.toString()).to.be.equal('7, gogo, 57,54,78');
    });

  })

  describe("Test clear()", function () {
    
    it("test with empty Array", function () {
      list.clear();
      expect(list.toString()).to.be.equal('');
    });

    it("test with two items", function () {
      list.addRight(7);
      list.addRight("gogo");
      list.clear();
      expect(list.toString()).to.be.equal('');
    });

    it("test with three items", function () {
      list.addRight(7);
      list.addRight("gogo");
      list.addRight([57,54,78]);
      list.clear();
      expect(list.toString()).to.be.equal('');
    });

  })

  describe("Test toString()", function () {
    
    it("test with one item", function () {
      list.addLeft(2.85)
      expect(list.toString()).to.be.equal('2.85');
    });

  })

})
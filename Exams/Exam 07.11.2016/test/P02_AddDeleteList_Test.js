let expect = require('chai').expect;
const listCreator = require('../P02_AddDeleteList');

describe("Test Add Delete Functionality", function () {

  //Comment this code due to Judge Imperfections
  
  // let list;
  // beforeEach(function () {
  //   list = listCreator();
  // });

  describe("Test Add functionality", function () {
   
    it("Initial state should return []", function () {

      expect(list.toString()).to.be.equal('');
    });

    it("ADD 5 should return 5", function () {
      list.add(5)
      expect(list.toString()).to.be.equal('5');
    });

    it("ADD with two values should return 6, 7", function () {
      list.add(6)
      list.add(7)
      expect(list.toString()).to.be.equal('6, 7');
    });

    it("ADD with two diffrent value types should return 1, mystring", function () {
      list.add(1)
      list.add('mystring')
      expect(list.toString()).to.be.equal('1, mystring');
    });

  })

  describe("Test Delete functionality", function () {
   
    it("Initial state should return []", function () {

      list.delete(2);
      expect(list.toString()).to.be.equal('');
    });

    it("Initial state should return undefined", function () {

      expect(list.delete(2)).to.be.undefined;
    });

    it("Delete valid index should return 1, 3", function () {
      list.add(1);
      list.add(2);
      list.add(3);
      list.delete(1);
      expect(list.toString()).to.be.equal('1, 3');
    });

    it("Delete valid index should return 2", function () {
      list.add(1);
      list.add("2");
      list.add(3);
      
      expect(list.delete(1)).to.be.equal("2");
    });

    it("Delete with floating-point index should return 1, 2, 3", function () {
      list.add(1);
      list.add(2);
      list.add(3);
      list.delete(1.5);
      expect(list.toString()).to.be.equal('1, 2, 3');
    });

    it("Delete with floating-point index should return undefined", function () {
      list.add(1);
      list.add(2);
      list.add(3);
      
      expect(list.delete(1.5)).to.be.undefined;
    });

    it("Delete with index 0 should return 2, 3", function () {
      list.add(1);
      list.add(2);
      list.add(3);
      list.delete(0);
      expect(list.toString()).to.be.equal('2, 3');
    });

    it("Delete with index 0 should return 1", function () {
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.delete(0)).to.be.equal(1);
    });

    it("Delete with last index should return 1, 2", function () {
      list.add(1);
      list.add(2);
      list.add(3);
      list.delete(2);
      expect(list.toString()).to.be.equal('1, 2');
    });

    it("Delete with last index should return 3", function () {
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.delete(2)).to.be.equal(3);
    });


  })

});
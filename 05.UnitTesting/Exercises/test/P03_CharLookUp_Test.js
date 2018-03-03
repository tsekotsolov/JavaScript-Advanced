let expect = require('chai').expect;
const lookupChar = require('../P03_CharLookUp');

describe("TEST lookupChar", function () {

  it("Should return s", function () {
    let result = lookupChar("string", 0);
    expect(result).to.be.equal('s');
  });

  it("Should return g", function () {
    let result = lookupChar("string", 5);
    expect(result).to.be.equal('g');
  });

  it("Should return Incorrect Index with negative index", function () {
    let result = lookupChar("string", -1);
    expect(result).to.be.equal('Incorrect index')
  });

  it("Should return Incorrect Index with invalid index", function () {
    let result = lookupChar("string", 40);
    expect(result).to.be.equal('Incorrect index')
  });

  it("Should return undefined with invalid input type", function () {
    let result = lookupChar([0,1,2], 3);
    expect(result).to.be.undefined;
  });

  it("Should return undefined with floating point number", function () {
    let result = lookupChar("test", 3.5);
    expect(result).to.be.undefined;
  });

});
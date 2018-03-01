let expect = require('chai').expect;
const rgbToHexColor = require('../P06_rgbToHex');


describe("rgbToHexColor", function () {

  it("should return #FFFFFF", function () {
    expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
  });

  it("should return #000000", function () {
    expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
  });

  it("should return #0C0D0E", function () {
    expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
  });

  it("should return undefined", function () {
    expect(rgbToHexColor(-12, 13, 14)).to.be.equal(undefined);
  });

  it("should return undefined", function () {
    expect(rgbToHexColor(-12, [13], 14)).to.be.equal(undefined);
  });
  it("should return undefined", function () {
    expect(rgbToHexColor(12, 13, {5:-5})).to.be.equal(undefined);
  });

  it("should return undefined", function () {
    expect(rgbToHexColor(12, 13)).to.be.equal(undefined);
  });
  it("should return undefined", function () {
    expect(rgbToHexColor(12, 13, '11')).to.be.equal(undefined);
  });

  it("should return undefined", function () {
    expect(rgbToHexColor(12.5, 13.18, 12.8)).to.be.equal(undefined);
  });
  it("should return undefined", function () {
    expect(rgbToHexColor(12, 256, 255)).to.be.equal(undefined);
  });

});
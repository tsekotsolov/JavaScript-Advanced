let expect = require('chai').expect;
const isSymmetric = require('../P05_CheckSymetry');

describe("isSymmetric(arr)", function () {

    it("should return TRUE", function () {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.equal(true);
    });

    it("should return FALSE", function () {
        expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.equal(false);
    });

    it("should return TRUE", function () {
        expect(isSymmetric([])).to.be.equal(true);
    });

    it("should return FALSE", function () {
        expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
    });

    it("should return TRUE", function () {
        expect(isSymmetric([-1, 2, -1])).to.be.equal(true);
    });

    it("should return FALSE", function () {
        expect(isSymmetric([1, 2])).to.be.equal(false);
    });

    it("should return TRUE", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });

    it("should return FALSE", function () {
        expect(isSymmetric([5, 'hi', {
            a: 5
        }, new Date(), {
            X: 5
        }, 'hi', 5])).to.be.equal(false);
    });

    it("should return TRUE", function () {
        expect(isSymmetric([5, 'hi', {
            a: 5
        }, new Date(), {
            a: 5
        }, 'hi', 5])).to.be.equal(true);
    });

    it("should return FALSE", function () {
        expect(isSymmetric(1, 2, 2, 1)).to.be.equal(false);
    });

});
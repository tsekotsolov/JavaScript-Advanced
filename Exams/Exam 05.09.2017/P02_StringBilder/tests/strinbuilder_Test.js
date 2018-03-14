let expect = require('chai').expect;
const StringBuilder = require('../stringbuider');

describe("StringBuilder Tests", function () {

    let stringBuilder;

    beforeEach(function () {
        stringBuilder = new StringBuilder();
    });

    describe("Test initial state", function () {
        it("Test with undefined", function () {

            stringBuilder = new StringBuilder(undefined)
            expect(stringBuilder._stringArray.length).to.be.equal(0);
        });


        it("Test with real string", function () {

            stringBuilder = new StringBuilder('ivo')
            expect(stringBuilder._stringArray.length).to.be.equal(3);
        });

        it("Test with real object", function () {
            
            expect(()=>stringBuilder = new StringBuilder({})).to.throw(TypeError);
        });

    });

})
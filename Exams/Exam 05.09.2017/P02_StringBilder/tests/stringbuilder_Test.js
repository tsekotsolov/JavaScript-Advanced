let expect = require('chai').expect;
const StringBuilder = require('../stringbuider');

describe("StringBuilder Tests", function () {

    let stringBuilder;

    beforeEach(function () {
        stringBuilder = new StringBuilder('test');
    });

    describe("Test if functions exist", function () {

        it("Test if append() exsists ", function () {
            expect(StringBuilder.prototype).to.ownProperty('append');
        });

        it("Test if prepend() exists ", function () {
            expect(StringBuilder.prototype).to.ownProperty('prepend');
        });

        it("Test if insertAt() exists", function () {
            expect(StringBuilder.prototype).to.ownProperty('insertAt');
        });

        it("Test if remove() exists", function () {
            expect(StringBuilder.prototype).to.ownProperty('remove');
        });

        it("Test if toString() exists", function () {
            expect(StringBuilder.prototype).to.ownProperty('toString');
        });

        it("Test if _vrfyParam() exists", function () {
            expect(StringBuilder).to.ownProperty('_vrfyParam');
        });

    });


    describe("Test initial state", function () {
        it("Test with undefined", function () {

            stringBuilder = new StringBuilder(undefined)
            expect(stringBuilder._stringArray.length).to.be.equal(0);
        });


        it("Test with real string", function () {

            expect(stringBuilder._stringArray.length).to.be.equal(4);
        });

        it("Test with object", function () {

            expect(() => stringBuilder = new StringBuilder({})).to.throw(TypeError);
        });

    });


    describe("Test REMOVE", function () {
        it("Test with real string", function () {
            
            stringBuilder.remove(0,2);
            expect(stringBuilder.toString()).to.be.equal('st');
        });

        it("Test with invalid index", function () {
            
            stringBuilder.remove(-7,2);
            expect(stringBuilder.toString()).to.be.equal('st');
        });
        
        it("Test with lenght outside of the array", function () {
            
            stringBuilder.remove(0,16);
            expect(stringBuilder.toString()).to.be.equal('');
        });
        it("Test with negative length", function () {
            
            stringBuilder.remove(1,-16);
            expect(stringBuilder.toString()).to.be.equal('test');
        });
    });

    describe("Test insertAt", function () {
        it("Test with real string and valid index", function () {
            
            stringBuilder.insertAt("ss",3);
            expect(stringBuilder.toString()).to.be.equal('tessst');
        });

        it("Test with real string and invalid index", function () {
            
            stringBuilder.insertAt("ss",18);
            expect(stringBuilder.toString()).to.be.equal('testss');
        });

        it("Test with real string and negative index", function () {
            
            stringBuilder.insertAt("ss",-18);
            expect(stringBuilder.toString()).to.be.equal('sstest');
        });

        it("Test with real string at index 0", function () {
            
            stringBuilder.insertAt("ss",-18);
            expect(stringBuilder.toString()).to.be.equal('sstest');
        });

        it("Test with real string at index lenght", function () {
            
            stringBuilder.insertAt("ss",4);
            expect(stringBuilder.toString()).to.be.equal('testss');
        });

        it("Test with invalid string", function () {

            expect(() => stringBuilder.insertAt({},7)).to.throw(TypeError);
        });

        it("Test with empty string", function () {
            
            stringBuilder.insertAt("",1);
            expect(stringBuilder.toString()).to.be.equal('test');
        });

        it("Test with empty initial string", function () {
            stringBuilder= new StringBuilder();
            stringBuilder.insertAt("sec",1);
            expect(stringBuilder._stringArray.length).to.be.equal(3);
        });


    });

    describe("Test prepend", function () {
        it("Test with invalid string", function () {
            expect(() => stringBuilder.prepend({},2)).to.throw(TypeError);
        });

        it("Test with real string", function () {
            
            stringBuilder.prepend("ss");
            expect(stringBuilder.toString()).to.be.equal('sstest');
        });

    });

    describe("Test append", function () {
        it("Test with invalid string", function () {
            expect(() => stringBuilder.append({},2)).to.throw(TypeError);
        });

        it("Test with real string", function () {
            
            stringBuilder.append("ss");
            expect(stringBuilder.toString()).to.be.equal('testss');
        });

    });


    describe("Test toString", function () {
        
        it("Test with real string", function () {
            
            expect(stringBuilder.toString()).to.be.equal('test');
        });

        it("Test with empty string", function () {
            stringBuilder = new StringBuilder('')
            expect(stringBuilder.toString()).to.be.equal('');
        });

    });

})
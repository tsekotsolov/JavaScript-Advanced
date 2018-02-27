let expect = require('chai').expect;

describe("sum(arr)", function () {
    
    it("should return 3 for [1, 2]", function () {
        expect(sum([])).to.be.equal(0);
    });

    it("should return 0", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });

    it("should return 3.15", function () {
        expect(sum([-1,3.15,1])).to.be.equal(3.15);
    });
    it("should return NaN", function () {
        expect(sum('tese')).to.be.NaN;
    });
   
});




function sum(arr) {
    let sum = 0;

    for (num of arr)
        sum += Number(num);
    return sum;
}
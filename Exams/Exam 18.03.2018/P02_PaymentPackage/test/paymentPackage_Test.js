let expect = require('chai').expect;
const PaymentPackage = require('../paymentPackage');

describe("Payment Package", function () {

    let paymentPackage;

    describe("Test if functions exist", function () {

        it("Test if toString() exsists ", function () {
            expect(PaymentPackage.prototype).to.ownProperty('toString');
        });

    });

    describe("Test input values", function () {


        it("Test with valid input Data ", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(paymentPackage.value).to.be.equal(7);
        });

        it("Test with zero value ", function () {

            paymentPackage = new PaymentPackage('Ivan', 0);
            expect(paymentPackage.value).to.be.equal(0);
        });

        it("Test with invalid name", function () {
            expect(() => paymentPackage = new PaymentPackage('', 7)).to.throw(Error);
        });

        it("Test with one parameter", function () {
            expect(() => paymentPackage = new PaymentPackage('Ivan')).to.throw(Error);
        });

        it("Test with negative number", function () {
            expect(() => paymentPackage = new PaymentPackage('Ivan',-7)).to.throw(Error);
        });

        it("Test with invalid number", function () {
            expect(() => paymentPackage = new PaymentPackage('Ivan', '15')).to.throw(Error);
        });

        it("Test with valid input Data number getter ", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(paymentPackage.value).to.be.equal(7);
        });

        it("Test with valid input Data name getter ", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(paymentPackage.name).to.be.equal('Ivan');
        });

    });

    describe("Test VAT", function () {


        it("Test VAT initial state", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(paymentPackage.VAT).to.be.equal(20);
        });

        it("Test VAT setter with valid number", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            paymentPackage.VAT = 25
            expect(paymentPackage.VAT).to.be.equal(25);
        });

        it("Test VAT set with negative number", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);

            expect(() => paymentPackage.VAT = -25).to.throw(Error)
        });

        it("Test VAT set wit object", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);

            expect(() => paymentPackage.VAT = {}).to.throw(Error)
        });

        it("Test VAT set with 0", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            paymentPackage.VAT = 0
            expect(paymentPackage.VAT).to.be.equal(0);
        });

        it("Test VAT set with floating point", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            paymentPackage.VAT = 3.22
            expect(paymentPackage.VAT).to.be.equal(3.22);
        });

        it("Test VAT set with floating point getter", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
        
            expect(paymentPackage.VAT).to.be.equal(20);
        });

    });


    describe("Test Active", function () {


        it("Test Active initial state", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(paymentPackage.active).to.be.equal(true);
        });

        it("Test Active with false", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            paymentPackage.active = false;
            expect(paymentPackage.active).to.be.equal(false);
        });

        it("Test Active with number", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(()=>paymentPackage.active = 45).to.throw(Error);
        });

        it("Test Active with null", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(()=>paymentPackage.active = null).to.throw(Error);
        });


        it("Test Active with false", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            paymentPackage.active = true;
            expect(paymentPackage.active).to.be.equal(true);
        });

    });

    describe("To String", function () {

        it("Test Active initial state", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            expect(paymentPackage.toString()).to.be.equal(`Package: Ivan\n- Value (excl. VAT): 7\n- Value (VAT 20%): 8.4`);
        });


        it("Test Active initial state", function () {

            paymentPackage = new PaymentPackage('Ivan', 7);
            paymentPackage.active=false;
            expect(paymentPackage.toString()).to.be.equal(`Package: Ivan (inactive)\n- Value (excl. VAT): 7\n- Value (VAT 20%): 8.4`);
        });

    });

})
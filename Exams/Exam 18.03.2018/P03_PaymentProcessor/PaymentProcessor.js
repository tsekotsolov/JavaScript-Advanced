class PaymentProcessor {

    constructor(objOptions) {

        this.objOptions = objOptions;
        this.container = new Map();
    }

    set objOptions(objOptions) {

        this.setOptions(objOptions)
    }

    get objOptions() {
        return this._objOptions;
    }

    setOptions(options) {

        let template = {
            types: ["service", "product", "other"],
            precision: 2
        };

        if (options !== undefined && options !== null) {

            for (const key in options) {
                template[key] = options[key];
            }
        }

        this._objOptions = template;
       
    }

    registerPayment(id, name, type, value) {

        this.validateIdAndName(id);
        this.validateIdAndName(name);
        this.validateType(type);
        this.validateValue(value);

        if (!this.container.has(id)) {
            this.container.set(id, {
                Name: name,
                Type: type,
                Value: value
            })
        } else {
            throw new Error();
        }
    }

    deletePayment(id) {
        if (this.container.has(id)) {
            this.container.delete(id);
        } else {
            throw new Error();
        }
    }

    get(id) {
        if (this.container.has(id)) {

            let result = `Details about payment ID: ${id}\n- Name: ${this.container.get(id).Name}\n- Type: ${this.container.get(id).Type}\n- Value: ${this.container.get(id).Value.toFixed(this.objOptions.precision)}`

            return result;

        } else {
            throw new Error();
        }
    }

    toString() {

        let sum = 0;

        for (let i = 0; i < [...this.container].length; i++) {
            sum += Number([...this.container][i][1].Value);
        }
        let result = `Sumamry:\n- Payments: ${[...this.container].length}\n- Balance: ${sum.toFixed(this.objOptions.precision)}`

        return result;

    };

    validateIdAndName(param) {
        if (typeof (param) !== 'string' || param === '') {

            throw new Error()
        }
    }

    validateType(type) {

        if (this._objOptions.types.indexOf(type) === -1) {
            throw new Error();
        }
    }

    validateValue(value) {

        if (isNaN(value) || typeof (value) === 'string') {

            throw new Error();
        }
    }
}


// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({
    types: ['product', 'material']
});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({
    types: ['service']
});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({
    precision: 5
});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
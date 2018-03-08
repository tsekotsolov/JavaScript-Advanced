class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(value) {
        const regex = /^[0-9]{6}$/g;
        if (regex.test(value)) {
            this._clientId = value;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }
    get clientId() {
        return this._clientId;
    }

    set email(value) {
        const regex = /^[A-Za-z0-9]+@[A-Za-z.]+$/g;
        if (regex.test(value)) {
            this._email = value;
        } else {
            throw new TypeError('Invalid e-mail');
        }
    }

    get email(){
        return this._email;
    }

}


let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Petrov');

console.log(acc.email);
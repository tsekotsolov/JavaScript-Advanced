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
    get email() {
        return this._email;
    }

    set firstName(value) {
        const regexLength = /^.{3,20}$/g;
        const regexLetters = /^[A-Za-z]+$/g;

        if (!regexLength.test(value)) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if (!regexLetters.test(value)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = value;

    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        const regexLength = /^.{3,20}$/g;
        const regexLetters = /^[A-Za-z]+$/g;

        if (!regexLength.test(value)) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (!regexLetters.test(value)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = value;

    }

    get lastName() {
        return this._lastName;
    }

}


//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
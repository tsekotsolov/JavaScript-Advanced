let CheckingAccount = (
  function () {

    function validate(prop, value) {

      let template = {
        "clientID": /^[0-9]{6}$/g,
        "email": /^[A-Za-z0-9]+@[A-Za-z.]+$/g,
        "firstName": /^[A-Za-z]+$/g,
        "lastName": /^[A-Za-z]+$/g,
        "firstNameLenght": /^.{3,20}$/g,
        "lastNameLenght": /^.{3,20}$/g
      }

      switch (prop) {
        case "clientID":
          if (!template[prop].test(value)) {
            throw new TypeError('Client ID must be a 6-digit number');
          }

          break;

        case "email":
          if (!template[prop].test(value)) {
            throw new TypeError('Invalid e-mail');
          }
          break;

        case "firstNameLenght":
          if (!template[prop].test(value)) {
            throw new TypeError('First name must be between 3 and 20 characters long');
          }
          break;

        case "firstName":
          if (!template[prop].test(value)) {
            throw new TypeError('First name must contain only Latin characters');
          }

          break;

        case "lastNameLenght":
          if (!template[prop].test(value)) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
          }
          break;

        case "lastName":
          if (!template[prop].test(value)) {
            throw new TypeError('Last name must contain only Latin characters');
          }

          break;
      }

    }
    class CheckingAccount {

      constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
      }

      set clientId(value) {
        validate("clientID", value);
        this._clientId = value;
      }
      get clientId() {
        return this._clientId;
        
      }

      set email(value) {
        validate("email", value);
        this._email = value;
      }
      get email() {
        return this._email;
      }

      set firstName(value) {
        validate("firstNameLenght", value);
        validate("firstName", value);
        this._firstName = value;

      }

      get firstName() {
        return this._firstName;
      }

      set lastName(value) {

        validate("lastNameLenght", value);
        validate("lastName", value);
        this._lastName = value;
      }

      get lastName() {
        return this._lastName;
      }

    }
    return CheckingAccount;
  }

)();

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(acc);
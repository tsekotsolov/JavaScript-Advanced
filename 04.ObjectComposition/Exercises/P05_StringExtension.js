(function () {

  String.prototype.ensureStart = function (str) {

    if (!this.includes(str)) {
      return result = str + this;
    }
    return this.valueOf(this);
  }

  String.prototype.ensureEnd = function (str) {

    if (!this.includes(str)) {
      return result = this + str;
    }
    return this.valueOf(this);

  }
  String.prototype.isEmpty = function () {
    if (this.valueOf(this) === '') {
      return true;
    }
    return false;
  }

  String.prototype.truncate = function (n) {

    let currentString = this.toString()
    if (n > currentString.length) {
      return currentString;
    } else {

      if (n < 4) {
        return '.'.repeat(n)
      }

      while (currentString.lastIndexOf(' ') != -1) {
        if (currentString.lastIndexOf(' ') <= n + 3) {
          return currentString.slice(0, currentString.lastIndexOf(' ')) + '...';
        }
        currentString = currentString.slice(0, currentString.lastIndexOf(' '))
      }
      return currentString.slice(0, n - 3) + '...'
    }
  }

})();


let str = 'my string';

str = (str.ensureStart('my'));
console.log(str);

str = (str.ensureStart('hello '));
console.log(str);

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
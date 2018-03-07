class Stringer {
  constructor(innerString, innerLength) {

    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  get innerLength() {
    return this._innerLength;
  }

  set innerLength(value) {
    if (value < 0) {
      this._innerLength = 0;
    } else {
      this._innerLength = value;
    }
  }

  increase(value) {
    this.innerLength += value;
  }

  decrease(value) {
    this.innerLength -= value;
  }

  toString() {
    if (this.innerString.length <= this.innerLength) {
      return this.innerString;
    }
    return this.innerString.substring(0, this.innerLength) + '...';
  }
}

let myStrigy = new Stringer('Ivan', 6);
myStrigy.increase(6);
myStrigy.decrease(1);
myStrigy.decrease(60);

console.log(myStrigy.toString());
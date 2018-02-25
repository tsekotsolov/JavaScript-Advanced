let firstObj = {
  width: 3,
  height: 4,
  area: function () {
    return this.width * this.height
  },
  compareTo: function (other) {
    if (other.area() !== this.area()) {
      return other.area() - this.area();
    }
    return other.width - this.width;
  }
}

let secondObj = {
  width: 6,
  height: 6,
  area:3
}

console.log(firstObj.area()); // execute function area with it`s own properties.
let result = firstObj.area.bind(secondObj); //passing function area with properties owned by a different object to a variable.
console.log(result()); // execute the result

console.log(firstObj);

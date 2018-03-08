class Sorted {


  constructor() {
    this.arr = [];
  }
  add(value){
   this.arr.push(value)
  }
}

let x = new Sorted();

x.add(5);

console.log(x);
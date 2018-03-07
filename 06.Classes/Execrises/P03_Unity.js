class Rat {

  constructor(name) {
    this.name = name;
    this.ratSquad = [];
  }

  unite(otherRat) {

    if (otherRat instanceof Rat) {
      this.ratSquad.push(otherRat);
    }

  }

  getRats() {
    return this.ratSquad;
  }

  toString() {
    let result = this.name + '\n';

    for (const rat of this.ratSquad) {

      result += `##${rat.name} \n`;
    }
    return result.trim();
  }

}


let rat1 = new Rat("Gosho");
let rat2 = new Rat('Pesho')

rat1.unite(rat2);

console.log(rat1.toString());
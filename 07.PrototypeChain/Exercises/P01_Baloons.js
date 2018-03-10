

  class Balloon {

    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBaloon extends Balloon {

    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);

      this.ribbonColor = ribbonColor;
      this.ribbonLength = ribbonLength;
    }
  }

  let myPartyBaloon = new PartyBaloon('white', 16, 'red', 45);

  console.log(myPartyBaloon);

  console.log(Object.getPrototypeOf(myPartyBaloon));
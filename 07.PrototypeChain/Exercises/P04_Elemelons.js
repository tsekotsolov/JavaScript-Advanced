function solve() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Cannot instantiate directly");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
        }
        get elementIndex() {
            return this._elementIndex;
        }
        toString() {
            return `Element: ${(this.element)}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Water";
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Fire";
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Earth";
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Air";
        }
    }

    class Melolemonmelon extends Watermelon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
            this.elements = ["Fire", "Earth", "Air", "Water"];
            this.index = 0;
        }

        morph() {
            this.element = this.elements[this.index++ % 2]
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }

}

let classes = solve();

let myWaterMelon = new classes.Watermelon(5, 'MnogoIakaDinq');
let myFireMelon = new classes.Firemelon(65, 'Kingsize');
let test = new classes.Melolemonmelon(100, 'Big Fruit');

// console.log(myWaterMelon.toString());
// console.log(myFireMelon.toString());
test.morph();
test.morph();
test.morph();
test.morph();
test.morph();

console.log(test.toString());
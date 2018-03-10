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
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
        }
    }



    return {
        Melon,
        Watermelon,
        // Firemelon,
        // Earthmelon,
        // Airmelon
    }

}

let classes = solve();

let myWaterMelon = new classes.Watermelon(5, 'WaterMelon');

console.log(myWaterMelon.elementIndex);
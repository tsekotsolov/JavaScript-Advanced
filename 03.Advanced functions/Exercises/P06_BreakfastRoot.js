function solution() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            fat: 0,
            protein: 0
        },
        coke: {
            carbohydrate: 10,
            flavour: 20,
            fat: 0,
            protein: 0
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7,
            protein: 0
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1,
            carbohydrate: 0,
        },
        cheverme: {
            carbohydrate: 10,
            flavour: 10,
            fat: 10,
            protein: 10
        }
    }
    return function (input) {

        let data = input.split(' ');
        let command = data[0];

        switch (command) {
            case 'restock':
                let ingredient = data[1];
                let quantity = Number(data[2]);
                stock[ingredient] += quantity;
                return 'Success';
                break;

            case 'prepare':

                let meal = data[1];
                let mealsOrdered = Number(data[2]);

                let proteinInStock = checkStock(stock.protein, meals[meal].protein, mealsOrdered);
                let carbsInStock = checkStock(stock.carbohydrate, meals[meal].carbohydrate, mealsOrdered);
                let fatInStock = checkStock(stock.fat, meals[meal].fat, mealsOrdered);
                let flavoursInStock = checkStock(stock.flavour, meals[meal].flavour, mealsOrdered);

                let arrOfAvailability = [{
                    protein: proteinInStock
                }, {
                    carbohydrate: carbsInStock
                }, {
                    fat: fatInStock
                }, {
                    flavour: flavoursInStock
                }];

                if (proteinInStock && carbsInStock && fatInStock && flavoursInStock) {

                    stock.carbohydrate -= meals[meal].carbohydrate * mealsOrdered;
                    stock.flavour -= meals[meal].flavour * mealsOrdered;
                    stock.fat -= meals[meal].fat * mealsOrdered;
                    stock.protein -= meals[meal].protein * mealsOrdered;
                    return 'Success';

                } else {

                    for (const ingredient of arrOfAvailability) {
                        
                        // if (Object.values(ingredient)[0] === false) {
                        //     return `Error: not enough ${Object.keys(ingredient)[0]} in stock`
                        // }
                        
                        if (ingredient.protein === false) {
                            return `Error: not enough protein in stock`
                        }
                        if (ingredient.carbohydrate === false) {
                            return `Error: not enough carbohydrate in stock`
                        }
                        if (ingredient.fat === false) {
                            return `Error: not enough fat in stock`
                        }
                        if (ingredient.flavour === false) {
                            return `Error: not enough flavour in stock`
                        }
                    }
                }

            case 'report':
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
                break;
            default:
                break;
        }

        function checkStock(stockIngredient, mealIngredient, numberOfMeals) {

            if (stockIngredient < mealIngredient * numberOfMeals) {
                return false;
            }
            return true;
        }
    }
}

let manager = solution();

console.log(manager('restock protein 100'));
console.log(manager('restock carbohydrate 100'));
console.log(manager('restock fat 100'));
console.log(manager('restock flavour 100'));
console.log(manager('report'));
console.log(manager('prepare omelet 2'));
console.log(manager('report'));
console.log(manager('prepare omelet 1'));
console.log(manager('report'));

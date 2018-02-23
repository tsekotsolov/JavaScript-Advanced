function solution() {

    let stock = {
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        flavour: 0
    }
    return function (input) {

        let data = input.split(' ');
        let command = data[0];

        if (command === 'restock') {
            let ingredient = data[1];
            let quantity = Number(data[2]);
            stock[ingredient] += quantity;

            console.log('Success');
        }
        
    }
}


let manager = solution();
manager("restock flavour 50");
manager("restock flavour 10");
manager("restock fat 10");
manager("restock flavour -5");
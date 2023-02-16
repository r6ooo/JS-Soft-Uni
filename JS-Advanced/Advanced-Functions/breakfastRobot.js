//	apple - made with 1 carbohydrate and 2 flavour
//	lemonade - made with 10 carbohydrate and 20 flavour
//	burger - made with 5 carbohydrate, 7 fat and 3 flavour
//	eggs - made with 5 protein, 1 fat and 1 flavour
//	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour

function solution() {
    const library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };
    const storedElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };


    function manager(str) {
        let [command, action, quantity] = str.split(' ');
        quantity = Number(quantity);
        if (command === 'prepare') {
            let recipe = library[action];
            for (const el in recipe) {
                if (recipe[el] * quantity > storedElements[el]) {
                    return `Error: not enough ${el} in stock`
                }
            }
            for (const el in recipe) {
                storedElements[el] -= recipe[el] * quantity;
            }
            return 'Success';
        } else if (command === 'restock') {
            storedElements[action] += quantity;
            return 'Success';
        } else if (command === 'report') {
            const result = [];
            for (const el in storedElements) {
                result.push(`${el}=${storedElements[el]}`);
            }
            return result.join(' ');
        }
    }
    return manager;
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
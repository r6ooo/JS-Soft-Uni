function promotions(arr) {
    let obj = {};
    for (const el of arr) {
        [city, item, price] = el.split(' | ');
        price = Number(price);

        if(!obj[item]) {
            obj[item] = {price, city}};

        if (obj[item].price > price) {
            obj[item] = {price, city}};
    }
    let products = Object.keys(obj);
    for (const product of products) {
        console.log(`${product} -> ${obj[product].price} (${obj[product].city})`);
    }
}
promotions(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);

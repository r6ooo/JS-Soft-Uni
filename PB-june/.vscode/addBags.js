function addBags(input){
    let index = 0;
    let priceOver20 = Number(input[index]);
    index++;

    let kilograms = Number(input[index]);
    index++;

    let days = Number(input[index]);
    index++;

    countOfBags = Number(input[index]);
    index++;

    let price = 0;
    

    if (kilograms < 10){
        price = priceOver20 * 0.2;
    } else if (kilograms >= 10 && kilograms <= 20){
        price = priceOver20 * 0.5;
    } else {
        price = priceOver20;
    }

    if (days > 30){
        price *= 1.1;
    } else if (days >= 7 && price <= 30){
        price *= 1.15;
    } else {
        price *= 1.4;
    }

    let sum = price * countOfBags;
    console.log(`The total price of bags is: ${sum.toFixed(2)} lv. `);
}
addBags(["63.80",
"23",
"3",
"1"])
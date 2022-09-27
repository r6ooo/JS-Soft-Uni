function deerOfSanta(input) {
    let index = 0;
    let daysCount = Number(input[index]);
    index++;

    let food = Number(input[index]);
    index++;

    let firstDeer = Number(input[index]);
    index++;
    
    let secondDeer = Number(input[index]);
    index++;

    let thirtyDeer = Number(input[index]);
    index++;

    let neededFood = (firstDeer + secondDeer + thirtyDeer) * daysCount;
    let diff = Math.abs(food - neededFood);

    if(neededFood <= food) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }

    
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
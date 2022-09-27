function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let countFisherman = Number(input[2]);

    // "Spring", "Summer", "Autumn", "Winter"

    let boatPrice = 0;

    switch (season) {
        case "Spring": 
            boatPrice = 3000;   
        break;
        case "Summer":
        case "Autumn": 
            boatPrice = 4200;
        break;
        case "Winter": 
            boatPrice = 2600;
        break;
    }

    if (countFisherman <= 6){
        boatPrice = boatPrice * 0.90;
    }else if (countFisherman >= 7 && countFisherman <= 11){
        boatPrice = boatPrice * 0.85;
    }else {
        boatPrice = boatPrice * 0.75;
    }

    if (countFisherman % 2 === 0 && season !== "Autumn") {
        boatPrice = boatPrice * 0.95;
    }

    let diff = Math.abs(budget - boatPrice);
    if (budget >= boatPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}
fishingBoat(["3000","Summer","11"]);
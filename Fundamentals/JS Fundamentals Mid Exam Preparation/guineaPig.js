function foodForPet(input) {

    let foodInKilos = Number(input.shift());
    let hayInKilos = Number(input.shift());
    let coverInKilos = Number(input.shift());
    let pigWeightKilos = Number(input.shift());

    let foodInGrams = foodInKilos * 1000;
    let hayInGrams = hayInKilos * 1000;
    let coverInGrams = coverInKilos * 1000;
    let pigWeightGrams = pigWeightKilos * 1000;
    let isEnough = true;

    for (let day = 1; day <= 30; day++) {

        if (day % 1 === 0) {
            foodInGrams -= 300;
        }
        if (day % 2 === 0) {
            hayInGrams -= foodInGrams * 0.05;
        }
        if (day % 3 === 0) {
            coverInGrams -= pigWeightGrams / 3;
        }
        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            isEnough = false;
            break;
        }
    }
    foodInKilos = foodInGrams / 1000;
    hayInKilos = hayInGrams / 1000;
    coverInKilos = coverInGrams / 1000;


    if (!isEnough) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodInKilos.toFixed(2)}, Hay: ${hayInKilos.toFixed(2)}, Cover: ${coverInKilos.toFixed(2)}.`);
    }
}
foodForPet(["10",
    "5",
    "5.2",
    "1"]);
foodForPet(["1",
    "1.5",
    "3",
    "1.5"
])
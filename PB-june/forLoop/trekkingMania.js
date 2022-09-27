function trekkingMania(input) {
    let index = 0;
    let countOfGroups = Number(input[index]);
    index++;

    let pMusala =0;
    let pMonblan = 0;
    let pKilimandjaro = 0;
    let pK2 = 0;
    let pEverest = 0;

    for(let i = 0; i < countOfGroups; i++) {
        let currentNumber = Number(input[index]);
        index++;

        if(currentNumber <= 5) {
            pMusala += currentNumber;
        } else if (currentNumber >= 6 && currentNumber <= 12) {
            pMonblan += currentNumber;
        } else if (currentNumber >= 13 && currentNumber <= 25) {
            pKilimandjaro += currentNumber;
        } else if (currentNumber >= 26 && currentNumber <= 40) {
            pK2 += currentNumber;
        } else {
            pEverest += currentNumber;
        }
    }
    let totalPeople = pMusala + pMonblan + pKilimandjaro + pK2 + pEverest;

    let musala = pMusala / totalPeople * 100;
    let monblan = pMonblan / totalPeople * 100;
    let kilimandjaro = pKilimandjaro / totalPeople * 100;
    let k2 = pK2 / totalPeople * 100;
    let everest = pEverest / totalPeople * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`);
    console.log(`${kilimandjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);


}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
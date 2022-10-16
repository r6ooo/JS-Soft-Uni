function pirates(array) {

    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);

    let totalPlunder = 0;
    let currentPlunder = 0;


    for (let i = 1; i <= days; i++) {
        let singlePlunger = dailyPlunder;

        if (i % 3 === 0) {
            singlePlunger = dailyPlunder * 1.5;
        }

        currentPlunder += singlePlunger;

        if (i % 5 === 0) {
            currentPlunder = currentPlunder - currentPlunder * 0.3;
        }
    }

    totalPlunder = currentPlunder;

    let percentage = (totalPlunder / expectedPlunder) * 100;

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
pirates(["5", "40", "100"]);
pirates(["10",
    "20",
    "380"])
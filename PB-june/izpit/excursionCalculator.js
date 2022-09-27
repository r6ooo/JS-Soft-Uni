function excursionCalculator(input) {
    let index = 0;
    let peopleCount = Number(input[index]);
    index++;

    let season = input[index];
    index++;

    let price = 0;
    switch (season) {
        case "spring":
            if (peopleCount <= 5) {
                price = peopleCount * 50;
            } else {
                price = peopleCount * 48;
            }
            break;
        case "summer":
            if (peopleCount <= 5) {
                price = (peopleCount * 48.5) * 0.85;
            } else {
                price = (peopleCount * 45) * 0.85;
            }
            break;
        case "autumn":
            if (peopleCount <= 5) {
                price = peopleCount * 60;
            } else {
                price = peopleCount * 49.5;
            }
            break;
        case "winter":
            if (peopleCount <= 5) {
                price = (peopleCount * 86) * 1.08;
            } else {
                price = (peopleCount * 85) * 1.08;
            }
            break;

    }
    console.log(`${price.toFixed(2)} leva.`)

}
excursionCalculator(["20",
    "winter"])
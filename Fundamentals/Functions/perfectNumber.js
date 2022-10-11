function isPerfect(number) {

    let currentNum = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            currentNum += i;
        }
    }
    if (currentNum === number && currentNum !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
isPerfect(28);
function sumAll(numbers) {

    while (numbers.length > 1) {
        let condensed = [numbers.length - 1];
        for (let i = 0; i < numbers.length - 1; i++) {
            condensed[i] = Number(numbers[i]) + Number(numbers[i + 1]);
        }
        numbers = condensed;

    }
    console.log(Number(numbers));
}
sumAll([2,10,3])
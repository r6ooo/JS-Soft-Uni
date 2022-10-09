function oddAndEvenSum(number) {

    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    let numberAsStringLength = numberAsString.length;

    for (let i = 0; i < numberAsStringLength; i++) {

        let currentNumber = Number(numberAsString[i]);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(3495892137259234);

function solve (number) {
    let numberAsString = number.toString();
    let sumOfDigits = 0;
    let numbeOfDigits = numberAsString.length

    for(let index = 0; index < numbeOfDigits; index++){
        let curentDigit = Number(numberAsString[index]);
        sumOfDigits += curentDigit;
    }
    console.log(sumOfDigits);
}
solve(245678)
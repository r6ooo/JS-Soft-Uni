function modify(input) {
    let resultArr = [];
    let inputArrSum = 0;
    let resultArraySum = 0;

    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let currentNumber = input[i];

        let odd = (currentNumber - i);
        let even = (currentNumber + i);

        if (currentNumber % 2 === 0) {
            resultArr.push(even);

        } else {
            resultArr.push(odd);
        }
        inputArrSum += currentNumber;
        resultArraySum += resultArr[i];
    }
    console.log(resultArr);
    console.log(inputArrSum);
    console.log(resultArraySum);

}
modify([5, 15, 23, 56, 35]);
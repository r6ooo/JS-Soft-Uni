function addAndSubtract(firstNumber, secondNumber, lastNumber) {

    function sum(firstNumber, secondNumber) {
        let result = firstNumber + secondNumber;
        return result;
    }

    let resultOfAdd = sum(firstNumber, secondNumber);

    function subtract(add, lastNumber) {
        resultOfSubtract = add - lastNumber;
        return resultOfSubtract;
    }

    let finalResult = (subtract(resultOfAdd, lastNumber))
    console.log(finalResult);

}
addAndSubtract(5, 5, 3);
function calculate(firstNumber, secondNumber, operator) {

    function multiply(firstNumber, secondNumber) {
        let sum = firstNumber * secondNumber;
        return sum;
    }

    function divide(firstNumber, secondNumber) {
        let sum = firstNumber / secondNumber;
        return sum;
    }

    function add(firstNumber, secondNumber) {
        let sum = firstNumber + secondNumber;
        return sum;
    }

    function subtract(firstNumber, secondNumber) {
        let sum = firstNumber - secondNumber;
        return sum;
    }

    switch (operator) {
        case 'multiply':
            result = multiply(firstNumber, secondNumber);
            break;
        case 'divide':
            result = divide(firstNumber, secondNumber);
            break;
        case 'add':
            result = add(firstNumber, secondNumber);
            break;
        case 'subtract':
            result = subtract(firstNumber, secondNumber);
            break;
    }
    console.log(result);
}
calculate(5, 5, 'multiply');



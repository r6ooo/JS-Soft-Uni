function factorialDivision(firstNum, secondNum) {

    let result = (factorial(firstNum) / factorial(secondNum)).toFixed(2);

    function factorial(num) {
        let currentFactorial = 1;
        for (let i = 1; i <= num; i++) {
            currentFactorial *= i;
        }
        return currentFactorial;
    }
    console.log(result);
}
factorialDivision(6, 2);
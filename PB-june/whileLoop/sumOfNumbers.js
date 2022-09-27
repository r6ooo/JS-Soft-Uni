function sumOfNumbers(input) {
    let num = Number(input[0]);
    let index = 1;
    let currentNumber = input[index];
    let sum = 0;

    while (sum < num) {
        
        sum += Number(currentNumber);
        index++;
        currentNumber = input[index];
    }
    console.log(sum);

}
sumOfNumbers(["100",
"10",
"20",
"30",
"40"])
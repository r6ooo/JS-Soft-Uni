function sumOfNumbers(input) {
    let enter = input[0];
    let sum = 0;

    for (i = 0; i < enter.length; i++) {
        sum += Number(enter[i]);
        
    }

    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"])
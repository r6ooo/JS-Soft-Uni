function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let sum = 0;
    let outputNumbers = "";

    for (let i = start; i < finish; i++) {
        if (i % 9 === 0) {
           sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let i = start; i < finish; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }

    
}
numbersDivisibleBy9(["100", "200"])
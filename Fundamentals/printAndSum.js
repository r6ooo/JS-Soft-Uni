function solve(startNumber, endNumber) {
    let sum = 0;
    let output = "";
    for (let curentNumber = startNumber; curentNumber <= endNumber; curentNumber++) {
        sum += curentNumber;
        output += ` ${curentNumber}`;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
solve(5,10);
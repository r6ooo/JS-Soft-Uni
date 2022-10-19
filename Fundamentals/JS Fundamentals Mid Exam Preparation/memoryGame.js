function memory(input) {

    let sequenceOfElements = input.shift().trim().split(' ');
    let command = input.shift();
    let turn = 0;

    while (sequenceOfElements.length > 0 && command !== 'end') {

        let [firstIndex, secondIndex] = command.split(' ').map(Number);
        turn++;

        if (firstIndex < 0 || firstIndex >= sequenceOfElements.length || firstIndex === secondIndex || secondIndex < 0 || secondIndex >= sequenceOfElements.length) {
            console.log('Invalid input! Adding additional elements to the board');
            let middle = (sequenceOfElements.length / 2);
            sequenceOfElements.splice(middle, 0, `-${turn}a`, `-${turn}a`);
        } else if (sequenceOfElements[firstIndex] !== sequenceOfElements[secondIndex]) {
            console.log("Try again!");
        }
        if (sequenceOfElements[firstIndex] === sequenceOfElements[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequenceOfElements[firstIndex]}!`);
            sequenceOfElements = removeElements(firstIndex, secondIndex);
        }
        if (sequenceOfElements.length === 0) {
            console.log(`You have won in ${turn} turns!`);
            break;
        }
        command = input.shift();
    }
    if (sequenceOfElements.length > 0) {

        console.log("Sorry you lose :(");
        console.log(`${sequenceOfElements.join(' ')}`);
    }

    function removeElements(firstIndex, secondIndex) {
        let num1 = sequenceOfElements[firstIndex];
        let num2 = sequenceOfElements[secondIndex];
        if (num1 === num2) {
            sequenceOfElements.splice(firstIndex, 1);
            secondIndex = sequenceOfElements.indexOf(num2);
            sequenceOfElements.splice(secondIndex, 1);
        }
        return sequenceOfElements;
    }
}
memory([
    "a 2 4 a 2 4  ",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "End"])
memory([
    "a 2 4 a 2 4",   ,
    "end"
])
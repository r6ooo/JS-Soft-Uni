function minNumber(input) {
    let inputElement = input[0];
    let index = 1;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let currentNum = Number(inputElement);
        if (currentNum < minNum) {
            minNum = currentNum;
        }
        inputElement = input[index];
        index++;
    }
    console.log(minNum);
}
minNumber(["100",
"99",
"80",
"70","5",
"Stop"])
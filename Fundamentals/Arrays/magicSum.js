function merlin(arr, givenNumber) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let sum = 0;
        for (let j = i + 1; j < arrLength; j++) {
            sum = arr[i] + arr[j];
            if (sum === givenNumber) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
merlin([1, 7, 6, 2, 19, 23], 8);
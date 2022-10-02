function equal(arrOne, arrTwo) {

    for (let i = 0; i < arrOne.length; i++) {
        arrOne[i] = Number(arrOne[i]);
    }
    for (let i = 0; i < arrTwo.length; i++) {
        arrTwo[i] = Number(arrTwo[i]);
    }

    let equals = true;
    let sum = 0;

    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equals = false;
            break;
        }

    }
    if (equals) {
        for (let num of arrOne) {
            sum += num;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }



}
equal(['1', '2', '3', '4', '5'],

    ['1', '2', '4', '4', '5'])
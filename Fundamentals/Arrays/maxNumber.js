function bigger(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (currentNumber <= array[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            resultArray.push(array[i]);
        }
    }
    console.log(resultArray.join(' '));

}
bigger([1, 4, 3, 2]);
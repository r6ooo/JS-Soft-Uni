function palindromeIntegers(arr) {

    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {

        let numberAsString = arr[i].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}
palindromeIntegers([123, 323, 421, 121]);
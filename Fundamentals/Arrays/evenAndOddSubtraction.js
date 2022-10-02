function solve(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (let number of arr) {
        if (number % 2 === 0) {
            sumOfEven += number;
        } else {
            sumOfOdd += number;
        }
    }
    let result = sumOfEven - sumOfOdd;

    console.log(result);

}
solve([1, 2, 3, 4, 5, 6]);
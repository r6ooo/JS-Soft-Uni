function solve(arr) {
    biggestNum = arr[0];
    return arr.reduce((acc, currentValue) => {
        if(biggestNum <= currentValue) {
            acc.push(currentValue);
            biggestNum = currentValue;
        }
        return acc;
    }, []);
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([20, 3, 2, 15, 6, 1]));

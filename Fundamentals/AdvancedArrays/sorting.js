function sorting(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < sortedArr.length; i++) {
        const lastElement = sortedArr.pop();
        const firstElement = sortedArr.shift();
        result.push(lastElement);
        result.push(firstElement);

    }
    result.push(sortedArr.pop());
    result.push(sortedArr.shift());

    console.log(result.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
function sorter(arr) {
    let resArr = [];
    arr = arr.sort((a, b) => a-b);
    while(arr.length !== 0) {
        resArr.push(arr.shift());
        resArr.push(arr.pop());
    }
    return resArr;
}
console.log(sorter([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
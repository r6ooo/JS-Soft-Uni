function solve(input) {
    let sumRows = 0;
    let sumColms = 0;

    for (let i = 0; i < input.length; i++) {
        let currArr = input[i];
        for (let j = 0; j < currArr.length; j++) {
            sumRows += currArr[j];
            sumColms += currArr[0];
        }
    }
    if(sumRows === sumColms) {
        console.log('true');
    }else {
        console.log('false')
    }
}
solve(
[[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
solve(
[[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);
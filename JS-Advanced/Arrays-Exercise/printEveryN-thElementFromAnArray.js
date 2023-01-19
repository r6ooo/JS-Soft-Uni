function solve(arr, step) {
    return arr.filter((el, index) => index % step == 0);


}
console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));
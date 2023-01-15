function check(number) {
    let numToString = number.toString();
    let sum = 0;
    let isSame = true;
    let firstLetter = numToString[0];

    for (let i = 0; i < numToString.length; i++) {
       if(firstLetter !== numToString[i]){
        isSame = false;
       }
       sum += Number(numToString[i]);
    }
    console.log(isSame);
    console.log(sum);

}
check(2222222);
check(1234);
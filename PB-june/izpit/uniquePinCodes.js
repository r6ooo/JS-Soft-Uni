function uniquePinCodes(input) {
    let index = 0;
    let upBorderFirst = Number(input[index]);
    index++;
    let upBorderSecond = Number(input[index]);
    index++;
    let upBorderThird = Number(input[index]);
    index++;

    for(let i = 2; i <= upBorderFirst; i += 2){
        for(let z = 2; z <= upBorderSecond; z++){
            if(z == 2 || z == 3 || z == 5 || z == 7){
                for(let x = 2; x <= upBorderThird; x += 2){
                    console.log(`${i} ${z} ${x}`);
                }
            }
            
        }
    }
    


}
uniquePinCodes(["8",
"2",
"8"])
function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCounter = 0;
    let isFinish = false;

    for (let i = start; i <= end; i++){
        for(let z = start; z <= end; z++){
            let result = i + z;
             combinationCounter++;
            
            if (result === magicNumber){
                console.log(`Combination N:${combinationCounter} (${i} + ${z} = ${magicNumber})`);
                isFinish = true;
                break;
            }
        }
        if (isFinish){
            break;
        }
    }
    if (!isFinish){
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["88",
"888",
"1000"])
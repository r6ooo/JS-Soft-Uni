function excursionSale(input) {
    let index = 0;
    let seaCount = Number(input[index]);
    index++;

    let mountainCount = Number(input[index]);
    index++;

    let seaPrice = 0;
    let mountainPrice = 0;

    let command = input[index];
    index++;

    while(command !== "Stop"){
        
        
        if(command === "sea" && seaCount > 0){
            
            
            seaPrice += 680;
            seaCount --;
        } else if(command === "mountain" && mountainCount > 0){
            
            
            mountainPrice += 499;
            mountainCount --;
        }
        if(command !== "sea" && command !== "mountain"){
            break;
        }
        command = input[index];
        index++; 
    }

    let total = seaPrice + mountainPrice;

    if(seaCount == 0 && mountainCount == 0){
        console.log(`Good job! Everything is sold.`);
    }
    console.log(`Profit: ${total} leva.`);

}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])
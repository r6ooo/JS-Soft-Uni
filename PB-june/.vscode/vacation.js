function vacation(input){
    let index = 0;
    let vacationMoney = Number(input[index]);
    index++;

    let cashMoney = Number(input[index]);
    index++;
    let spendCounter = 0;
    let dayCounter = 0;

    while(cashMoney < vacationMoney){
        let action = input[index];
        index++;
        let amount = Number(input[index]);
        index++;
        dayCounter++;

        switch(action){
            case "spend":
                cashMoney -= amount;
                if(cashMoney < 0){
                    cashMoney = 0;
                }
                spendCounter++;
                break;
            case "save":
                cashMoney += amount;
                spendCounter = 0;
                break;    
        }
        if(spendCounter === 5){
            break;
        }
    }
    if(spendCounter === 5){
        console.log("You can't save the money.");
        console.log(dayCounter);
    }else{
        console.log(`You saved the money for ${dayCounter} days.`);
    }



}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
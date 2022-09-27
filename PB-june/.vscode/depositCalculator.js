function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let timeOfDeposit = Number(input[1]);
    let anualRate = Number(input[2]);

    let yearRate = depositAmount * (anualRate / 100);
    let mountRate = yearRate / 12;
    let endPeriodRate = mountRate * timeOfDeposit;
    let sum = endPeriodRate + depositAmount;
    console.log(sum);

}
depositCalculator(["200 ",
    "3 ",
    "5.7 "]);
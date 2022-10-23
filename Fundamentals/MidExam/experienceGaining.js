function experienceGaining(input) {

    let neededExp = Number(input.shift());
    let battlesCount = Number(input.shift());
    let expGain = Number(input.shift());
    let collectedExp = 0;
    let battlesWin = 0;

    for (let exp = 1; exp <= battlesCount; exp++) {
        battlesWin = exp;

        
        if (battlesWin % 3 === 0) {
            collectedExp += (expGain * 1.15);
        } else if (battlesWin % 5 === 0) {
            collectedExp += (expGain * 0.9);
        } else if (battlesWin % 15 === 0) {
            collectedExp += (expGain * 1.05);
        } else {
            collectedExp += expGain;
        }
        if (collectedExp >= neededExp) {
            break;
        }
        expGain = Number(input.shift());
    }
    let notEnoughExp = Math.abs(neededExp - collectedExp);
    if (neededExp > collectedExp) {
        console.log(`Player was not able to collect the needed experience, ${notEnoughExp.toFixed(2)} more needed.`);
    } else {
        console.log(`Player successfully collected his needed experience for ${battlesWin} battles.`);
    }
}

experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20])
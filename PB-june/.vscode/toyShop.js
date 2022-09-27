function toyShop(input) {
    let price = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let money = puzzleCount * 2.60 + talkingDoll * 3 + bearCount * 4.10 + minionsCount * 8.20 + truckCount * 2;

    let toyCount = puzzleCount + talkingDoll + bearCount + minionsCount + truckCount;

    if (toyCount >= 50) {
        money = money * 0.75;
    }

    money = money * 0.9;

    let difference = Math.abs(price - money);

    if (money >= price) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }
    
    
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);
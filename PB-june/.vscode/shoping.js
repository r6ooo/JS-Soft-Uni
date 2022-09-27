function shoping(input) {
    let money = Number(input[0]);
    let videocardsCount = Number(input[1]);
    let procesorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videocardsPrice = videocardsCount * 250;
    let procesorPrice = videocardsPrice * 0.35;
    let ramPrice = videocardsPrice * 0.1;

    procesorPrice = procesorPrice * procesorsCount;
    ramPrice = ramPrice * ramCount;

    total = videocardsPrice + procesorPrice + ramPrice;
    


    if (videocardsCount > procesorsCount) {
        total = total * 0.85;
    } else {
        total = total
    }
    let amount = Math.abs(total - money);
    if (total <= money) {
        console.log(`You have ${amount.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${amount.toFixed(2)} leva more!`);
    }
    
}
shoping(["900",
"2",
"1",
"3"])
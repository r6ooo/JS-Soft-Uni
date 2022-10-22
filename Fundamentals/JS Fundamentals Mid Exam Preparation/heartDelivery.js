function spreadLove(input) {

    let neighborhood = input.shift().split('@').map(Number);
    let command = input.shift();
    let currentIndex = 0;

    while (command !== 'Love!') {

        let tokens = command.split(' ');
        let jumpIndex = Number(tokens[1])
        currentIndex += jumpIndex;

        if (currentIndex < 0) {
            command = input.shift();
            continue;
        }

        if (currentIndex >= neighborhood.length) {
            currentIndex = 0;
        }
        if (neighborhood[currentIndex] === 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            neighborhood[currentIndex] -= 2;
            if (neighborhood[currentIndex] === 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    let isSuccess = true;
    let count = 0;
    for (let el of neighborhood) {
        if (el !== 0) {
            count++;
            isSuccess = false;
        }
    }
    if (isSuccess) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }
}
spreadLove(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
console.log('---------');
//spreadLove(["2@4@2",
//    "Jump 2",
//    "Jump 2",
//    "Jump 8",
//    "Jump 3",
//    "Jump 1",
//    "Love!"])

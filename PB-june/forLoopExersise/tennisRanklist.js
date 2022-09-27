function tennisRanklist(input) {
    let index = 0;
    let tournamentsCount = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let currentPoints = 0;
    let winCounter =0;

    for(let i = 0; i < tournamentsCount; i++) {
        let result = input[index];
        index++;

        switch(result) {
            case "W": 
                winCounter++;
                currentPoints += 2000;
            break;
            case "F": 
                currentPoints += 1200;
            break;
            case "SF": 
                currentPoints += 720;
            break;

        }
    }

    let finalPoints = startingPoints + currentPoints;
    let avgPoints = Math.floor(currentPoints / tournamentsCount);
    let procreant = winCounter / tournamentsCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${procreant.toFixed(2)}%`);

}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
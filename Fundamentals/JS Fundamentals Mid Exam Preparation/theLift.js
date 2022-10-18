function arrangePeople(input) {

    let peopleInQueue = Number(input.shift());
    let spaceInWagons = input.toString().split(' ').map((x) => Number(x));
    let spaceInWagonsLength = spaceInWagons.length;

    for (let i = 0; i < spaceInWagonsLength; i++) {

        if (spaceInWagons[i] < 4) {
            if (peopleInQueue >= 4 - spaceInWagons[i]) {
                peopleInQueue -= 4 - spaceInWagons[i];
                spaceInWagons[i] = 4;
            } else {
                spaceInWagons[i] += peopleInQueue;
                peopleInQueue = 0;
            }
        }
    }

    let isFull = true;

    for (let j = 0; j < spaceInWagonsLength; j++) {
        let check = spaceInWagons[j];
        if (check < 4) {
            isFull = false;
            break;
        }
    }
    if (isFull && peopleInQueue > 0) {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`);
    }
    if (!isFull && peopleInQueue === 0) {
        console.log(`The lift has empty spots!`);
    }
    console.log(spaceInWagons.join(' '));
}
arrangePeople(["15", "0 0 0 0 0"]);
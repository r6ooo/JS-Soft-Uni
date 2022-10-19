function counterStrike(input) {

    let energy = Number(input.shift());
    let command = input.shift()
    let count = 0;
    let flag = false;

    while (command !== 'End of battle'&& energy >= 0) {
        let distance = Number(command);

        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            flag = true;
            energy -= distance;
            break;
        }
        energy -= distance;
        count++;
        if (count % 3 === 0) {
            energy += count;
        }
        command = input.shift();
    }
    if (energy >= 0 && !flag) {
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

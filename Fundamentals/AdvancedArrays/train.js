function train(input) {

    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());


    for (let i = 0; i < input.length; i++) {

        let commands = input[i].split(' ');

        if (commands[0] === "Add") {
            let newWagon = Number(commands[1]);
            wagons.push(newWagon);
        }
        if (commands[0] !== "Add") {
            let passengers = Number(commands);

            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + passengers <= maxCapacity) {
                    wagons[index] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
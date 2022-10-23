function starTrek(input) {

    let travelRoute = input.shift().split('||');
    let fuel = Number(input.shift());
    let ammunition = Number(input.shift());
    let command = travelRoute.shift();
    let isFailed = false;

    while (command !== 'Titan') {
        let tokens = command.split(' ')
        let action = tokens[0];
        let points = Number(tokens[1]);

        switch (action) {
            case 'Travel':
                if (fuel - points >= 0) {
                    fuel -= points;
                    console.log(`The spaceship travelled ${points} light-years.`);
                } else {
                    console.log("Mission failed.");
                    isFailed = true;
                    break;
                }
                break;
            case 'Enemy':
                if (ammunition >= points) {
                    ammunition -= points;
                    console.log(`An enemy with ${points} armour is defeated.`);
                } else if (ammunition < points && fuel - (points * 2) > 0) {
                    fuel -= points * 2;
                    console.log(`An enemy with ${points} armour is outmaneuvered.`);
                } else {
                    console.log("Mission failed.");
                    isFailed = true;
                    break;
                }
                break;
            case 'Repair':
                fuel += points;
                ammunition += points * 2;
                console.log(`Ammunitions added: ${(points * 2)}.`);
                console.log(`Fuel added: ${points}.`);
                break;
        }
        if (isFailed === true) {
            break;
        }
        command = travelRoute.shift();
        if (command === 'Titan') {
            console.log("You have reached Titan, all passengers are safe.");
        }
    }
}
starTrek(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])
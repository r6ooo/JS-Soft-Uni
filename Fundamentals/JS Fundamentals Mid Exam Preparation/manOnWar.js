function battleOfShips(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());
    let line = input.shift();
    let isGameOver = false;

    while (line !== 'Retire') {

        let command = line.split(' ');
        let order = command.shift();
        let index = 0;

        switch (order) {
            case 'Fire':
                index = Number(command.shift());
                let dmg = Number(command.shift());
                if (warShip[index] < 0 || index > warShip.length - 1) {
                    line = input.shift();
                    continue;
                }
                warShip[index] -= dmg;
                if (warShip[index] <= 0) {
                    isGameOver = true;
                    console.log("You won! The enemy ship has sunken.");
                }
                break;
            case 'Defend':
                index = Number(command.shift());
                let endIndex = Number(command.shift());
                let power = Number(command.shift());
                if (index < 0 || index > pirateShip.length - 1 || endIndex < 0 || endIndex > pirateShip.length - 1) {
                    line = input.shift();
                    continue;
                }
                for (let i = index; i <= endIndex; i++) {
                    pirateShip[i] -= power;
                    if (pirateShip[i] <= 0) {
                        isGameOver = true;
                        console.log("You lost! The pirate ship has sunken.");
                        break;
                    }
                }
                break;
            case 'Repair':
                index = Number(command.shift());
                let hp = Number(command.shift());
                if (pirateShip[index] < 0 || index > pirateShip.length - 1) {
                    line = input.shift();
                    continue;
                }
                pirateShip[index] += hp;
                if (pirateShip[index] > maxHp) {
                    pirateShip[index] = maxHp;
                }
                break;
            case 'Status':
                let lowerHpSections = maxHp * 0.2;
                let check = pirateShip.filter(el => el < lowerHpSections);
                console.log(`${check.length} sections need repair.`);
                break;
        }
        if (isGameOver) {
            break;
        }
        line = input.shift();
    }
    let pirateShipSum = 0;
    let warShipSum = 0;
    for (let section of pirateShip) {
        pirateShipSum += section;
    }
    for (let section of warShip) {
        warShipSum += section;
    }
    if (!isGameOver) {
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }
}
battleOfShips(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
battleOfShips(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);
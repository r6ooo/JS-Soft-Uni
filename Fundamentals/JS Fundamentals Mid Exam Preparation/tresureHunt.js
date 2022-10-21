function chestManager(input) {

    let loot = input.shift().split('|');
    let command = input.shift();

    while (command !== 'Yohoho!') {

        let tokens = command.split(' ');
        let action = tokens.shift();

        switch (action) {
            case 'Loot':
                for (let el of tokens) {
                    let index = loot.indexOf(el);
                    if (index < 0) {
                        loot.unshift(el);
                    }
                }
                break;
            case 'Drop':
                let indexOfDroppedItem = Number(tokens[0]);
                if(indexOfDroppedItem < 0 || indexOfDroppedItem > loot.length){
                    command = input.shift();
                    continue;
                }
                loot.push(loot.splice(indexOfDroppedItem, 1));
                break;
            case 'Steal':
                let pieces = Number(tokens[0]);
                let steeledItems = loot.splice(-pieces);
                console.log(steeledItems.join(', '));
                break;
        }
        command = input.shift();
    }

    if (loot.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        for (let el of loot) {
            sum += el.length;
        }
        let avg = sum / loot.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }
}
chestManager(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
chestManager(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);
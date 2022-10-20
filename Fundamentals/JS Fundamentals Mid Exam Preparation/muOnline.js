function muOnline(input) {

    let health = 100;
    let bitcoins = 0;
    let rooms = input.split('|');
    let counter = 0;
    let isNotDead = true;

    for (let currentRoom of rooms) {

        let command = currentRoom.split(' ');
        if (command[0] === 'potion') {
            let addHealth = Number(command[1]);
            let newHealth = (health + addHealth > 100) ? 100 : health + addHealth;
            console.log(`You healed for ${newHealth - health} hp.`);
            health = newHealth;
            console.log(`Current health: ${health} hp.`);
        } else if (command[0] === 'chest') {
            bitcoins += Number(command[1]);
            console.log(`You found ${command[1]} bitcoins.`);
        } else {
            let attack = Number(command[1]);
            health -= attack;
            if (health <= 0) {
                console.log(`You died! Killed by ${command[0]}.`);
                console.log(`Best room: ${counter + 1}`);
                isNotDead = false;
                break;
            } else if (health > 0) {
                console.log(`You slayed ${command[0]}.`);
            }
        } if (!isNotDead) {
            break;
        }
        counter++;
    }
    if (isNotDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

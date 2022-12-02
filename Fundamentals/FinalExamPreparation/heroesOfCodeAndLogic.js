function game(input) {
    const maxHealth = 100;
    const maxMana = 200;
    let countOfHeroes = Number(input.shift());
    let heroes = {};
    let tokens = input.shift();

    while (countOfHeroes > 0) {
        let [heroName, hp, mp] = tokens.split(' ');
        let health = Number(hp);
        let mana = Number(mp);
        if (!heroes.hasOwnProperty(heroName)) {
            heroes[heroName] = { health, mana }
        }
        countOfHeroes--;
        tokens = input.shift();
    }
    let commands = tokens.split(' - ');

    while (commands[0] !== 'End') {
        let command = commands[0];
        let heroName = commands[1];

        switch (command) {
            case 'CastSpell':
                let mana = Number(commands[2]);
                let spellName = commands[3];

                if (heroes[heroName].mana >= mana) {
                    heroes[heroName].mana -= mana;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(commands[2]);
                let attacker = commands[3];
                heroes[heroName].health -= damage;
                if (heroes[heroName].health > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].health} HP left!`);
                } else if (heroes[heroName].health <= 0) {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;
            case 'Recharge':
                let amountMp = Number(commands[2]);
                let rechargedAmount = maxMana - heroes[heroName].mana;
                heroes[heroName].mana += amountMp;
                if (heroes[heroName].mana > maxMana) {
                    heroes[heroName].mana = maxMana;
                    console.log(`${heroName} recharged for ${rechargedAmount} MP!`);
                } else {
                    console.log(`${heroName} recharged for ${amountMp} MP!`);
                }
                break;
            case 'Heal':
                let amountHp = Number(commands[2]);
                let healedAmount = maxHealth - heroes[heroName].health;
                heroes[heroName].health += amountHp;
                if (heroes[heroName].health > maxHealth) {
                    heroes[heroName].health = maxHealth;
                    console.log(`${heroName} healed for ${healedAmount} HP!`);
                } else {
                    console.log(`${heroName} healed for ${amountHp} HP!`);
                }
                break;
        }
        tokens = input.shift();
        commands = tokens.split(' - ');
    }
    let heroesArr = Object.entries(heroes);

    if (heroesArr.length > 0) {
        for (const kvp of heroesArr) {
            console.log(`${kvp[0]}\n  HP: ${kvp[1].health}\n  MP: ${kvp[1].mana}`);
        }
    }
}

game([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 150',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
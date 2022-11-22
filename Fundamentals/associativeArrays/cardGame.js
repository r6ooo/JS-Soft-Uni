function poker(input) {

    let power = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let type = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };
    let players = {};
    let final = {};

    for (const line of input) {
        let [name, cardsInHand] = line.split(': ');
        let cards = cardsInHand.split(', ');
        if (!players.hasOwnProperty(name)) {
            players[name] = cards.toString();
        } else {
            players[name] += (`,${cards}`);
        }
    }

    for (const el in players) {
        let sum = 0;
        let person = el;
        let cards = players[el].split(',');
        let set = new Set(cards);
        let cardsArr = [...set];

        for (const card of cardsArr) {
            if (card.length === 2) {
                let [powerOfCard, typeOfCard] = card.split('');
                sum += Number(power[powerOfCard]) * Number(type[typeOfCard]);
            } else {
                let [powerOfCard, secondPartOfPower, typeOfCard] = card.split('');
                powerOfCard = powerOfCard + secondPartOfPower;
                sum += Number(power[powerOfCard]) * Number(type[typeOfCard]);
            }
        }
        if (!final.hasOwnProperty(person)) {
            final[person] = sum;
        } else {
            final[person] += sum;
        }
    }
    for (const player in final) {
        console.log(`${player}: ${final[player]}`);
    }
}
poker([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
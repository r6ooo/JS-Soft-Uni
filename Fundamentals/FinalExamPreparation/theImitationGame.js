function enigma(input) {

    let message = input.shift();
    let instructions = input.shift().split('|');

    while (instructions[0] !== 'Decode') {
        let [operation, ...tokens] = instructions;
        switch (operation) {
            case 'Move':
                let countOfLetters = tokens[0];
                let messageArr = message.split('');
                let piece = messageArr.splice(0, countOfLetters);
                for (const el of piece) {
                    messageArr.push(el);
                }
                message = messageArr.join('');
                break;
            case 'Insert':
                let index = tokens[0];
                let value = tokens[1];
                message = (message.substring(0, index) + value + message.substring(index));
                break;
            case 'ChangeAll':
                let substring = tokens[0];
                let replacement = tokens[1];
                let messageArray = message.split('');
                for (let i = 0; i < messageArray.length; i++) {
                    if (messageArray[i] === substring) {
                        messageArray.splice(i, 1, replacement);
                    }
                }
                message = messageArray.join('');
                break;
        }

        instructions = input.shift().split('|');
    }
    console.log(`The decrypted message is: ${message}`);
}
enigma([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
enigma([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);
function decode(input) {

    let codedText = input.shift();
    let line = input.shift();

    while (line !== 'Reveal') {
        let [command, ...tokens] = line.split(':|:');
        switch (command) {
            case 'InsertSpace':
                let index = Number(tokens[0]);
                let spacedText = codedText.substring(0, index) + " " + codedText.substring(index);
                codedText = spacedText;
                console.log(codedText);
                break;
            case 'Reverse':
                let substring = tokens[0];
                if (codedText.includes(substring)) {
                    let indexOfCut = codedText.indexOf(substring);
                    let cutText = codedText.split('').splice(indexOfCut, substring.length + 1);
                    let revText = cutText.reverse();
                    let firstPart = codedText.split('').splice(0, indexOfCut);
                    let secondPart = codedText.split('').splice(indexOfCut + substring.length);
                    let newTextArr = firstPart.concat(secondPart).concat(revText);
                    codedText = newTextArr.join('');
                    console.log(codedText);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let [substr, replacement] = tokens;
                while (codedText.includes(substr)) {
                    let ind = codedText.indexOf(substr)
                    let piece = codedText.substring(ind, ind+substr.length);
                    codedText = codedText.replace(piece,replacement);
                }
                console.log(codedText);
                break;
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${codedText}`);
}
decode([
    'heVVodar!gniV',
    'ChangeAll:|:VV:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
decode([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
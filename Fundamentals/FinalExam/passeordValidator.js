function makePass(input) {
    let text = input.shift();
    let line = input.shift();

    while (line !== 'Complete') {
        let tokens = line.split(' ');
        let command;
        if(tokens.length=3){
             command = tokens[0]+' '+tokens[1];
        }else{
             command = tokens[0];
        }
        
        switch (command) {
            case 'Make Upper':
                let index = Number(tokens[2]);
                let firstPart = text.substring(0, index);
                let secondPart = text.substring(index, index + 1).toUpperCase(secondPart);
                let lastPart = text.substring(index + 1)
                text = firstPart + secondPart + lastPart;
                console.log(text);
                break;
            case 'Make Lower':
                let indexx = Number(tokens[2]);
                let firstPartt = text.substring(0, index);
                let secondPartt = text.substring(index, index + 1).toLowerCase(secondPart);
                let lastPartt = text.substring(index + 1)
                text = firstPartt + secondPartt + lastPartt;
                console.log(text);
                break;
            case 'Insert':
                let indexOfIns = Number(tokens[1]);
                let firstPart1 = text.substring(0, index);
                let secondPart2 = tokens[1];
                let lastPart3 = text.substring(index + 1)
                text = firstPart1 + secondPart2 + lastPart3;
                console.log(text);

                break;
            case 'Replace':
                let char = tokens[1];
                let value = Number(tokens[2]);
                let sum = char.charCodeAt(char) + value;
                let replacement = String.fromCharCode(sum);
                let messageArray = text.split('');
                for (let i = 0; i < messageArray.length; i++) {
                    if (messageArray[i] === char) {
                        messageArray.splice(i, 1, replacement);
                    }
                }
                text = messageArray.join('');
                console.log(text);

                break;
            case 'Validation':
                if (text.length < 8) {
                    console.log("Password must be at least 8 characters long!");
                }
                let pattern = /[A-Z][a-z0-9_]{8,}/gm;
                let regex = pattern.exec(text);
                if (!regex) {
                    console.log("Password must consist only of letters, digits and _!");
                }
                let upper= containsUppercase(text);
                if (!upper) {
                    console.log("Password must consist at least one uppercase letter!");
                }
                let lower = containsLower(text);
                if (!lower) {
                    console.log("Password must consist at least one lowercase letter!");
                }
                let digit =  containsDigit(text);    
                if (!digit) {
                    console.log("Password must consist at least one digit!");
                }
                break;
        }

        line = input.shift();
    }
}

function containsLower(str) {
    return /[a-z]/.test(str);

}
function containsUppercase(str) {
    return /[A-Z]/.test(str);

}
function containsDigit(str) {
    return /[0-9]/.test(str);

}
makePass(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete']);
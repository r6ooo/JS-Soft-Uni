function resetter(input) {
    let password = input.shift();
    let line = input.shift().split(' ');

    while (line[0] !== 'Done') {
        let action = line[0];
        switch (action) {
            case 'TakeOdd':
                let newPassword = '';
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }
                password = newPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(line[1]);
                let length = Number(line[2]);
                let string = password.substring(index, index + length);
                password = password.replace(string, '');
                console.log(password);
                break;
            case 'Substitute':
                let substring = line[1];
                let substitute = line[2];
                if (password.includes(substring)) {
                    while (password.includes(substring)) {
                        password = password.replace(substring, substitute);
                    }
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }
        line = input.shift().split(' ');
    }
    console.log(`Your password is: ${password}`);
}
resetter(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
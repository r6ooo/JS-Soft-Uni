function decoder(input) {
    let numberOfTexts = Number(input.shift());
    let pattern = /([$|%])(?<tag>[A-Z][a-z]{3,})\1: \[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|/gm
    let text = input.shift();
    let regex = pattern.exec(text);
    let validMsg = [];
    let conter = 0;

    for (let i = 0; i < numberOfTexts; i++) {
        
        if (!regex) {
            console.log('Valid message not found!');
        } else {
            validMsg.push({ tag: regex[2], num1: regex[3], num2: regex[4], num3: regex[5] });

            if (validMsg.push({ tag: regex[2], num1: regex[3], num2: regex[4], num3: regex[5] })) {
                conter++;

                let messages = Object.entries(validMsg);

                for (let i = conter; i < messages.length; i+=2) {
                    let num1 = messages[i][1].num1;
                    let num2 = messages[i][1].num2;
                    let num3 = messages[i][1].num3
                    let str = String.fromCharCode(num1) + String.fromCharCode(num2) + String.fromCharCode(num3);
                    console.log(`${messages[i][1].tag}: ${str}`);
                }
            }
        }
        text = input.shift();
        regex = pattern.exec(text);
    }
}
decoder(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"]);
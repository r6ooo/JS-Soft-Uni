function keyGenerator(input) {

    let key = input.shift();
    let line = input.shift().split('>>>');
    let command = line[0];

    while (command !== 'Generate') {
        switch (command) {
            case 'Contains':
                let substr = line[1];
                if(key.includes(substr)){
                    console.log(`${key} contains ${substr}`);
                }else{
                    console.log("Substring not found!");
                }
                break;
            case 'Flip':
                let cases = line[1];
                let startIndex = line[2];
                let endIndex = line[3];

                if(cases === 'Upper'){
                    key = key.slice(0,startIndex)+key.slice(startIndex,endIndex).toUpperCase()+key.slice(endIndex);
                    console.log(key);
                }
                if(cases === 'Lower'){
                    key = key.slice(0,startIndex)+key.slice(startIndex,endIndex).toLocaleLowerCase()+key.slice(endIndex);
                    console.log(key);
                }
                break;
            case 'Slice':
                let sliceStartIndex = line[1];
                let sliceEndIndex = line[2];
                key = key.slice(0,sliceStartIndex)+key.slice(sliceEndIndex);
                console.log(key);
                break;
        }

        line = input.shift().split('>>>');
        command = line[0];
    }
    console.log(`Your activation key is: ${key}`);
}
keyGenerator(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
function shooter(input) {
    let count = 0;
    let targetsArray = input.shift().split(' ').map(Number);

    for (let element of input) {
        if (element == 'End') {
            console.log(`Shot targets: ${count} -> ${targetsArray.join(' ')}`);
        }

        if (targetsArray.length > element) {
            let currentTarget = targetsArray[element];

            for (let i = 0; i < targetsArray.length; i++) {
                if (targetsArray[i] != -1) {
                    if (targetsArray[i] > currentTarget) {
                        targetsArray[i] -= currentTarget;
                    } else {
                        targetsArray[i] += currentTarget;
                    }
                }
            }
            targetsArray[element] = -1;
            count++;
        }
    }
}
shooter(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
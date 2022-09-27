function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let cakeSize = width * height;


    while (command !== "STOP") {
        let takenPieces = Number(command);

        cakeSize -= takenPieces;

        if (cakeSize < 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (cakeSize < 0) {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
    } else {
        console.log(`${cakeSize} pieces are left.`);
    }


}
cake(["10","10","20","20","20","20","21"])
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
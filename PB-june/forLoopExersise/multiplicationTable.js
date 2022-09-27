function multiplicationTable(input) {
    let x = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let result = i * x;
        console.log(`${i} * ${x} = ${result}`);
    }

}
multiplicationTable(["3"])
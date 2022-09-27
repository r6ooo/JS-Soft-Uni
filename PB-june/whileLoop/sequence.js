function sequence(input) {
    
    let startNum = Number(input[0]);
    let counter = 1;

    while (counter <= startNum) {
        console.log(counter);
        counter = 2 * counter +1;

    }


}
sequence(["31"]);
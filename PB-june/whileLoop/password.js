function password(input) {
    let username = input[0];
    let realPass = input[1];
    let data = input[2];

    let index = 3;

    while (data !== realPass) {
        data = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);

}
password(["Nakov",
"1234",
"pass","gosho","hhhd"])
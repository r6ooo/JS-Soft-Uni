function fishtank(input){
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percent = Number(input[3]);

    let volume = l * w * h;

    let totalVolume = volume / 1000;

    let neededLiters = totalVolume - (totalVolume* (percent / 100));

    console.log(neededLiters);


}

fishtank(["85 ",
"75 ",
"47 ",
"17 "]);
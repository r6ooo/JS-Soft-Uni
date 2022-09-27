function building(input){
    let x = Number(input[0]);
    let y = Number(input[1]);

    for(let floor = x; floor > 0; floor--){
        let res = "";
            for(let room = 0; room < y; room++){
                if(floor === x){
                    res += `L${floor}${room} `;
                } else if(floor % 2 !== 0) {
                    res += `A${floor}${room} `;
                } else {
                    res += `O${floor}${room} `
                }
            }
            console.log(res);
    }


}
building(["6", "4"])
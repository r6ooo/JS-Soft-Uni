function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];
    let res =0;

    switch(op) {
        case "+": 
         res = n1 +  n2;
            if (res % 2 == 0) {
                console.log(`${n1} ${op} ${n2} = ${res} - even`);
            }   else {
                console.log(`${n1} ${op} ${n2} = ${res} - odd`);
            }  
        break;
        case "-": 
            res = n1 - n2;
            if (res % 2 === 0) {
                console.log(`${n1} ${op} ${n2} = ${res} - even`);
            } else {
                console.log(`${n1} ${op} ${n2} = ${res} - odd`);
            }
        break;
        case "*": 
            res = n1 * n2;
            if (res % 2 === 0) {
                console.log(`${n1} ${op} ${n2} = ${res} - even`);
            } else {
                console.log(`${n1} ${op} ${n2} = ${res} - odd`);
            }
        break;
        case "/": 
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                res = n1 / n2;
                console.log(`${n1} ${op} ${n2} = ${res.toFixed(2)}`);
            }
        break;
        case "%": 
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            res = n1 % n2;
            console.log(`${n1} ${op} ${n2} = ${res}`);
        }
        break;

    }


}
operationsBetweenNumbers(["7",
"3",
"*"]);
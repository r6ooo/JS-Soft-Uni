function steps(input){
    let index = 0;
    let command = input[index];
    index++;

    let target = 10000;
    let steps = 0;

    while(command !== "Going home"){
        let curentSteps = Number(command);
        steps += curentSteps;

        if(steps >= target){
            
            break;
        }
        command = input[index];
        index++;
    }

    if(command === "Going home"){
        curentSteps = Number(input[index]);
        index++;
        steps += curentSteps;       
    }

    let diff = Math.abs(steps - target);

    if(steps >= target){
    
    console.log(`Goal reached! Good job!`);
    console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }

}
steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])


function hoursNeeded(input) {
    let hours;
     let name = input[0];
     let projects = input[1];

    hours = projects * 3;

   console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}

hoursNeeded(["Ivan", 3]);
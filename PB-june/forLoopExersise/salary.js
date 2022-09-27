function salary(input) {
    let index =0;
    let tabs = Number(input[index]);
    index++;
    let salaryTotal = Number(input[index]);
    index++;

    let ifHaveSalary = true;

    for (let i = 0; i <= tabs; i++) {
        let name = input[index];
        index++;

        switch(name) {
            case "Facebook": salaryTotal -= 150; break;
            case "Instagram": salaryTotal -= 100; break;
            case "Reddit": salaryTotal -= 50; break;
        }
        if (salaryTotal <= 0) {
            ifHaveSalary = false;
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if (ifHaveSalary) {
        console.log(salaryTotal);
    }

}    
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
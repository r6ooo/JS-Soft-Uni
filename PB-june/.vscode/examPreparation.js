function examPreparation(input) {
   let index = 0;
   let poorGrades = Number(input[index]);
   index++;
   let command = input[index];
   index++;

   let negativeGradeCounter = 0;
   let sumOfGrades = 0;
   let countProblems = 0;
    let taskName = "";

   while(command !== "Enough") {
     taskName = command;
    let grade = Number(input[index]);
    index++;
    countProblems++;
    sumOfGrades += grade;

    if(grade <= 4) {
        negativeGradeCounter++;
        if (negativeGradeCounter === poorGrades) {
            
            break;
        }
    }

    command = input[index];
    index++;
   }

   let average = sumOfGrades / countProblems;
   if(command !== "Enough") {
    console.log(`You need a break, ${poorGrades} poor grades.`);
   } else {
   console.log(`Average score: ${average.toFixed(2)}`);
   console.log(`Number of problems: ${countProblems}`);
   console.log(`Last problem: ${taskName}`);
   }

}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
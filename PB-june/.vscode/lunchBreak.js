function lunchBreak(input){
   let nameOfSeries = input[0];
   let episodeTime = Number(input[1]);
   let breakTime = Number(input[2]);
   
   let eatingTime = breakTime * 1/8;
   let restTime = breakTime * 1/4;

   let timeLeft = breakTime - eatingTime - restTime;


   if (timeLeft >= episodeTime){
    console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`);
   } else {
    console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(episodeTime - timeLeft)} more minutes.`);
   }


}
lunchBreak(["Teen Wolf",
"48",
"60"])
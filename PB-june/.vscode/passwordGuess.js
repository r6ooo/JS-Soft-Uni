function passwordGuess(input){

   let savedPassword = "s3cr3t!P@ssw0rd";
   let password = (input[0]);
      if (password !== savedPassword) {
        console.log("Wrong password!");
      } else {
        console.log("Welcome");
      }

}
passwordGuess(["s3cr3t!P@ssw0rd"]);
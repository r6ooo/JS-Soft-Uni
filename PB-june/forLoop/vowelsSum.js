function vowelsSum(input) {
   const vowels = ["a","e","i","o","u"];
    const text = input[0];
    let sum = 0;

   for (let i = 0; i < text.length; i++) {
     let isVowels = vowels.includes(text[i]);
     if (isVowels) {
         sum += vowels.indexOf(text[i]) + 1;
        
     }

   }
    console.log(sum);
}
vowelsSum(["beer"])
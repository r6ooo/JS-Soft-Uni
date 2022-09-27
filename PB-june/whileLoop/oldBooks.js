function oldBooks(input){
    let lovedBook = input[0];
    let index = 1;
    let count = 0;

    while(lovedBook !== "No More Books"){
        let name = input[index];
        
        if (lovedBook === name){
            console.log(`You checked ${count} books and found it.`);
            break;
        } else if (name === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${count} books.`);
            break;
        }
        index++;
        count++;
    }
    
    
    
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
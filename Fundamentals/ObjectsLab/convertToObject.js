function convert(firstName, lastName, hairColor) {

    let info = {};
    info.name = firstName;
    info.lastName = lastName;
    info.hairColor = hairColor;

   
    console.log(JSON.stringify(info));

}

convert('George', 'Jones', 'Brown');
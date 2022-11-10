function cityInfo(input){

    for (const key of Object.keys(input)) {
        console.log(`${key} -> ${input[key]}`);
        
    }

}
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
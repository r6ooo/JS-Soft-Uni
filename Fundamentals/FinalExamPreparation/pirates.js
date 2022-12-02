function robbery(input) {

    let citiesList = {};
    let command = input.shift();

    while (command !== "Sail"&& command !== undefined) {
        let tokens = command.split('||');
        let town = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!citiesList.hasOwnProperty(town)) {
            citiesList[town] = { population, gold };
        } else {
            citiesList[town].population += population;
            citiesList[town].gold += gold;
        }
        command = input.shift();
    }
    command = input.shift();

    while (command !== "End"&& command !== undefined) {
        let actionCommands = command.split('=>');
        let action = actionCommands[0];


        if (action === "Plunder") {
            let town = actionCommands[1];
            let population = Number(actionCommands[2]);
            let gold = Number(actionCommands[3]);
            if (citiesList[town]) {
                if (citiesList[town].population - population < 0) {
                    population = citiesList[town].population;
                }else if (citiesList[town].gold - gold < 0){
                    gold = citiesList[town].gold;
                }
                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                citiesList[town].population -= population;
                citiesList[town].gold -= gold;

                if (citiesList[town].population <= 0 || citiesList[town].gold <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete citiesList[town];
                }
            }
        }
        if (action === "Prosper") {
            let town = actionCommands[1];
            let gold = Number(actionCommands[2]);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
                citiesList[town].gold += 0;
            } else {
                citiesList[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesList[town].gold} gold.`);
            }

        }
        command = input.shift();
    }
    let victimsArr = Object.entries(citiesList);


    if (victimsArr.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
    console.log(`Ahoy, Captain! There are ${victimsArr.length} wealthy settlements to go to:`);

    for (let kvp of victimsArr) {
        console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`);
    }
}
robbery(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
robbery(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);
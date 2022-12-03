function race(input) {

    let countOfCars = Number(input.shift());
    let line = input.shift();
    let garage = {};

    for (let i = countOfCars; i > 0; i--) {
        let [car, ...priorites] = line.split('|');
        let mileage = Number(priorites[0]);
        let fuel = Number(priorites[1]);
        garage[car] = { mileage, fuel };
        line = input.shift();
    }
    while (line !== 'Stop') {
        let [comand, car, ...tokens] = line.split(' : ');

        switch (comand) {
            case 'Drive':
                let distance = Number(tokens[0]);
                let fuel = Number(tokens[1]);
                if (garage[car].fuel - fuel < 0) {
                    console.log("Not enough fuel to make that ride"
                    );
                } else {
                    garage[car].mileage += distance;
                    garage[car].fuel -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
                if (garage[car].mileage >= 100000) {
                    delete garage[car];
                    console.log(`Time to sell the ${car}!`);
                }
                break;
            case 'Refuel':
                let fuelToReload = Number(tokens[0]);
                const maxFuel = 75;
                if (garage[car].fuel + fuelToReload > maxFuel) {
                    let litresToMax = maxFuel - garage[car].fuel;
                    garage[car].fuel += litresToMax;
                    console.log(`${car} refueled with ${litresToMax} liters`);
                } else {
                    garage[car].fuel += fuelToReload;
                    console.log(`${car} refueled with ${fuelToReload} liters`);
                }
                break;
            case 'Revert':
                let kilometers = Number(tokens[0]);
                garage[car].mileage -= kilometers;
                
                if (garage[car].mileage < 10000) {
                    garage[car].mileage = 10000;
                }else{
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
        line = input.shift();
    }
    for (const kvp of Object.entries(garage)) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    }
}
race([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
race([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
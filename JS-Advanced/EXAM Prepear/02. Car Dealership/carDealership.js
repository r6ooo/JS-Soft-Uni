class CarDealership {
    constructor(name, availableCars, soldCars, totalIncome) {
        this.name = name;
        this.availableCars = availableCars;
        this.soldCars = soldCars;
        this.totalIncome = 0;
    }
    

}
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));
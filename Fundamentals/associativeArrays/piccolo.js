function printParking(input) {

    let parkingList = new Map();

    input.map(el => el.split(', '))
        .forEach(element => {
        const [command, carNumber] = element;
        if (command === 'IN') {
            parkingList.set(carNumber, command);
        } else if (command === 'OUT') {
            parkingList.delete(carNumber);
        }
    });
    let sortedCarNumbers = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));
    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    }
    sortedCarNumbers.forEach((carNumber) => console.log(carNumber[0]));
}
printParking([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
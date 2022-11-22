function printResources(input) {

    let resources = {};

    for (let index = 0; index < input.length; index += 2) {
        const resource = input[index];
        const quantity = Number(input[index + 1]);
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0;
        }
        resources[resource] += quantity;
    }
    for (const item in resources) {
        console.log(`${item} -> ${resources[item]}`);
    }
}
printResources([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '155'
]);
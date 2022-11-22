function listOfEmployees(input) {

    let result = {};

    input.forEach(line => {
        let [companyName, personId] = line.split(' -> ');
        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(personId);
    });
    let sortedCompanies = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompanies.forEach(el => {
        const companyName = el[0];
        const allIds = el[1];

        console.log(companyName);

        let uniqueIds = new Set(allIds);

        for (const id of uniqueIds) {
            console.log(`-- ${id}`);
        }
    });
}
listOfEmployees([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
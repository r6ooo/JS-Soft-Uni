function employeesList(arr) {

    let employees = {};

    arr.forEach(person => {
        employees[person] = person.length;
    });

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }

}
employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
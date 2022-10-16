function shopping(array) {

    let groceriesList = array.shift().split('!');
    let element = array.shift();

    while (element != 'Go Shopping!') {

        let [command, item, newItem] = element.split(' ');

        switch (command) {
            case 'Urgent':
                urgent(groceriesList, item);
                break;
            case 'Unnecessary':
                unnecessary(groceriesList, item);
                break;
            case 'Correct':
                correct(groceriesList, item, newItem);
                break;
            case 'Rearrange':
                rearrange(groceriesList, item);
                break;
        }
        element = array.shift();
    }

    console.log(groceriesList.join(', '));

    function urgent(list, item) {
        if (list.includes(item) === false) {
            list.unshift(item);
        }
    }

    function unnecessary(list, item) {
        if (list.includes(item) === true) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    function correct(list, item, newItem) {
        if (list.includes(item) === true) {
            let index = list.indexOf(item);
            list[index] = newItem;
        }
    }

    function rearrange(list, item) {
        if (list.includes(item) === true) {
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.push(item);
        }
    }

}
shopping(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

shopping(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
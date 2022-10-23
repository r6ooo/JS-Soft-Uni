function phoneShop(input) {

    let listOfPhones = input.shift().split(', ');
    let command = input.shift();

    while (command !== "End") {

        let [action, model] = command.split(' - ');
        let index = listOfPhones.indexOf(model);

        switch (action) {
            case 'Add':
                if (index < 0) {
                    listOfPhones.push(model);
                }
                break;
            case 'Remove':
                if (index > -1) {
                    listOfPhones.splice(index, 1);
                }
                break;
            case 'Bonus phone':
                let [oldPhone, newPhone] = model.split(':');
                let newIndex = listOfPhones.indexOf(oldPhone);
                if (newIndex > -1) {
                    listOfPhones.splice(newIndex + 1, 0, newPhone);
                }
                break;
            case 'Last':
                if (index > -1) {
                    listOfPhones.splice(index, 1);
                    listOfPhones.push(model);
                }
                break;
        }
        command = input.shift();
    }
    console.log(listOfPhones.join(', '));
}
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])
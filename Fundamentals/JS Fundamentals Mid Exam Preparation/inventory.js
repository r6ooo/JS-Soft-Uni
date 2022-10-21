function crafting(input) {

    let journal = input.shift().split(', ');
    let command = input.shift();

    while (command !== 'Craft!') {
        let order = command.split(" - ");
        [currentCommand, item] = order;
        let index = journal.indexOf(item);

        switch (currentCommand) {
            case 'Collect':
                if (index < 0) {
                    journal.push(item);
                }
                break;
            case 'Drop':
                if (index > -1) {
                    journal.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let splittedItem = item.split(':');
                let oldItem = splittedItem[0];
                let newItem = splittedItem[1];
                index = journal.indexOf(oldItem);
                if (index > -1) {
                    journal.splice(index + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (index > -1) {
                    journal.splice(index, 1);
                    journal.push(item);
                }
                break;
        }
        command = input.shift();
        
    }
    console.log(journal.join(", "));
}
crafting(['Iron, Sword',
    'Collect - Sword',
    'Combine Items - Gold:Bow',
    'Renew - Iron',
    'Craft!']);
crafting([
    'Iron, Wood, Sword',
  'Collect - Gold',
    'Drop - Wood',
   'Craft!'
]);
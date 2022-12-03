function notepad(input) {

    let numberOfPieces = Number(input.shift());
    let line = input.shift().split('|');
    let catalog = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = line
        catalog[piece] = { composer, key };
        line = input.shift().split('|');
    }

    while (line[0] !== 'Stop') {
        let command = line[0];
        let piece = line[1];

        switch(command){
            case 'Add':
                let composer = line[2];
                let key = line[3];
                if(!catalog[piece]){
                    catalog[piece]= {composer: composer,key: key};
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }else{
                    console.log(`${piece} is already in the collection!`);
                }
                break;
                case 'Remove':
                    if(catalog[piece] != undefined){
                        delete catalog[piece];
                        console.log(`Successfully removed ${piece}!`);
                    }else{
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    }
                break;
                case 'ChangeKey':
                    let newKey = line[2];
                    if(!catalog[piece]){
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    }else{
                        catalog[piece].key = newKey;
                         console.log(`Changed the key of ${piece} to ${newKey}!`);
                    }
                break;
        }

        line = input.shift().split('|');
    }
    for (const piece in catalog) {
        console.log(`${piece} -> Composer: ${catalog[piece].composer}, Key: ${catalog[piece].key}`);
    }
}
notepad([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
notepad([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);
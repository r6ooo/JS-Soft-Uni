function searching(array, arr2) {

    let [countOfElementsToTake, numberElementsToDelete, searchedNumber] = arr2;

    let arrayForSearching = array.slice(0, countOfElementsToTake);
    arrayForSearching.splice(0, numberElementsToDelete);

    let counter = 0;
    for (const el of arrayForSearching) {
        if (el === searchedNumber) {
            counter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searching([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searching([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);
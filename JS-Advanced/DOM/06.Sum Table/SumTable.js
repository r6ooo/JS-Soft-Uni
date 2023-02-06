function sumTable() {
    let table = document.querySelectorAll('table tr');
    let sum = 0;
    for (let index = 1; index < table.length; index++) {
        let cols = table[index].children;
        let price = cols[cols.length - 1].textContent;
        sum += Number(price);
    }
    document.getElementById('sum').textContent = sum;
}
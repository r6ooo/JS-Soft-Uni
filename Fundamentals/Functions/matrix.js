function matrix(number) {

    let arr = [];

    let rowGenerator = () => {
        let singleRow = '';
        for (let j = 1; j <= number; j++) {
            singleRow += `${number} `;
        }
        return singleRow;
    }
    for (let i = 1; i <= number; i++) {
        console.log(rowGenerator());
    }
}
matrix(7);
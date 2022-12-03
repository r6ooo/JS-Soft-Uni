function competition(input) {
    let text = input[0].split('').join('');
    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
    let wordsArr = [...text.matchAll(pattern)];
    let validPairs = [];

    for (let i = 0; i < wordsArr.length; i++) {
        let firstWord = wordsArr[i].groups.word1;
        let secondWord = wordsArr[i].groups.word2;
        validPairs.push(firstWord);
        validPairs.push(secondWord);
    }
    if (validPairs.length === 0) {
        console.log('No word pairs found!');
    } else {
        let count = (validPairs.length / 2);
        console.log(`${count} word pairs found!`);
    }
    let mirrorWords = [];

    for (i = 0; i < wordsArr.length; i++) {
        let firstWord = wordsArr[i].groups.word1;
        let secondWord = wordsArr[i].groups.word2;
        if (firstWord === secondWord.split('').reverse().join('')) {
            mirrorWords.push(firstWord);
            mirrorWords.push(secondWord);
        }
    }

    if (mirrorWords.length <= 0) {
        console.log("No mirror words!");
    } else {
        let output = [];
        let str = '';
        for (i = 0; i <= (mirrorWords.length); i += 2) {
            if (mirrorWords[i] !== undefined) {
                str = `${mirrorWords[i]} <=> ${mirrorWords[i + 1]}`;
                output.push(str);
            }
        }
        console.log("The mirror words are:");
        console.log(output.join(', '))
    }

}
competition([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
competition(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
competition(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
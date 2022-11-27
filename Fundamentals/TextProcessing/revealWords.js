function reveal(words, text) {

    const wordsArr = words.split(', ');
    wordsArr.forEach((word) => {
        const match = `${'*'.repeat(word.length)}`;
        text = text.replace(match, `${word}`)
    });

    console.log(text.trim());


}
reveal('great, learning',
'softuni is ***** place for ******** new programming languages');
function checking(word, text) {

    const tokens = text.split(' ');

    for(const token of tokens) {
        if (word.toLowerCase() === token.toLowerCase()) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`);
}
checking('javascript',
    'JavaScript is the best programming language');
checking('python',
    'JavaScript is the best programming language');
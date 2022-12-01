function extractEmojis(input) {

    let text = input.shift();
    let numPattern = /\d/g;
    let emojiPattern = /([*]{2}|[:]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let coolThreshold = 1;

    let allDigits = text.match(numPattern);
    for (const digit of allDigits) {
        coolThreshold *= digit;
    }
    let counter = 0;
    let cool = 0;
    let emojis = text.match(emojiPattern);
    let coolEmojis = [];

    for (const emoji of emojis) {
        let emoName = emoji.slice(2, -2);

        for (let i = 0; i < emoName.length; i++) {
            cool += emoName.charCodeAt(i);

        }
        if (cool > coolThreshold) {
            coolEmojis.push(emoji);

        }
        counter++;
        cool = 0;
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);

    if (coolEmojis.length > 0) {
        console.log(coolEmojis.join('\n'));
    }
}



extractEmojis([`In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**,
 a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**`]);
extractEmojis(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

extractEmojis(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);









//([*]{2}|[:]{2})(?<emoji>\w[A-Za-z]{2,})\1
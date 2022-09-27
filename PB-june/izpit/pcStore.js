function pcStore(input) {
    let index = 0;
    let processor = Number(input[index]);
    index++;

    let videoCard = Number(input[index]);
    index++;
    
    let ram = Number(input[index]);
    index++;

    let countOfRam = Number(input[index]);
    index++;

    let discount = Number(input[index]);
    index++;

    let processorInLeva = processor * 1.57;
    let videoCardInLeva = videoCard * 1.57;
    let ramInLeva = ram * 1.57;

    processorInLeva = processorInLeva - (processorInLeva * discount);
    videoCardInLeva = videoCardInLeva - (videoCardInLeva * discount);
    ramInLeva = ramInLeva * countOfRam;

    let sum = processorInLeva + videoCardInLeva + ramInLeva ;

    console.log(`Money needed - ${sum.toFixed(2)} leva.`);

}
pcStore(["200",
"100",
"80",
"1",
"0.01"])
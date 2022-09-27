function rotation(band,album,song){
    let duration =(album.length * band.length) * song.length / 2;
    //console.log(duration);

    let fullRotations =Math.ceil(duration/2.5);
    console.log(`The plate was rotated ${fullRotations} times.`);
}
rotation('Black Sabbath', 'Paranoid', 'War Pigs');
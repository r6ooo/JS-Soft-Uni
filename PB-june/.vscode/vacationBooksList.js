function vacationBooksList(input) {
    let countPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let timeForReading = countPages / pagesPerHour;
    let hoursPerDay = timeForReading / daysCount;


    console.log(hoursPerDay)

}

vacationBooksList(["212 ",
    "20 ",
    "2 "]);
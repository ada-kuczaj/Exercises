function totalBirdCount(birdsPerDay) {
    let birdNumber = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        birdNumber += birdsPerDay[i];
    }
    return birdNumber;
}

function birdsInWeek(birdsPerDay, weekNumber) {
    let birdNumber = 0;
    let startDay = (weekNumber - 1) * 7;
    let endDay = startDay + 7;
    for (let i = startDay; i < endDay && i < birdsPerDay.length; i++) {
        birdNumber += birdsPerDay[i];
    }
    return birdNumber;
}

function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
        birdsPerDay[i] += 1;
    }
    return birdsPerDay;
}

module.exports = {
    totalBirdCount,
    birdsInWeek,
    fixBirdCountLog
}


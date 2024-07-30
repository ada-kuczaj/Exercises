function score(x, y) {
    let score = 0;
    let pointsDistance = Math.sqrt((x - 0) ** 2 + (y - 0) ** 2)

    if (pointsDistance > 10) {
        score += 0;
    } else if (pointsDistance > 5 && pointsDistance <= 10) {
        score += 1;
    } else if (pointsDistance > 1 && pointsDistance <= 5) {
        score += 5;
    } else if (pointsDistance >= 0 && pointsDistance <= 1) {
        score += 10;
    }
    return score;
}

module.exports = {
    score
}
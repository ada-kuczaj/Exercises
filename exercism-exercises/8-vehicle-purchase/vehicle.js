function needsLicense(kind) {
    return kind === 'car' || kind === 'truck' ? true : false;
}

function chooseVehicle(option1, option2) {
    let decision
    option1 < option2 ? decision = option1 : decision = option2;
    return `${decision} is clearly the better choice.`;
}

function calculateResellPrice(originalPrice, age) {
    let price;
    if (age < 3.0) {
        price = 0.8 * originalPrice;
        return price;
    } else if (age > 10.0) {
        price = 0.5 * originalPrice;
        return price;
    } else {
        price = 0.7 * originalPrice;
        return price;
    }
}

module.exports = {
    needsLicense,
    chooseVehicle,
    calculateResellPrice
}
let ratePerHour = 28;
let fixedBudget = 20000;
let numberOfDays = 230;
let monthlyDiscount = 0.42;

function dayRate(ratePerHour) {
    return ratePerHour * 8;
}

function daysInBudget(fixedBudget, ratePerHour) {
    return Math.floor(fixedBudget / dayRate(ratePerHour))
}

function priceWithMonthlyDiscount(ratePerHour, numberOfDays, monthlyDiscount) {
    let charge = 1 - monthlyDiscount;
    let fullMonths = Math.floor(numberOfDays / 22);
    let exceedingDays = numberOfDays % 22;
    return Math.ceil(charge*fullMonths*dayRate(ratePerHour)*22+dayRate(ratePerHour)*exceedingDays);
  }
module.exports = {
    dayRate,
    daysInBudget,
    priceWithMonthlyDiscount
}
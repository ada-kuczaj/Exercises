const { dayRate, daysInBudget, priceWithMonthlyDiscount } = require('./freelancer')

test('calculating the day rate at 89/hour', () => {
    const ratePerHour = 89;
    expect(dayRate(ratePerHour)).toBe(712);
});

test('calculating the day rate at 31.40/hour', () => {
    const ratePerHour = 31.40;
    expect(dayRate(ratePerHour)).toBe(251.2);
});

test('calculate the number of working days until the budget is exhausted', () => {
    const ratePerHour = 89;
    const fixedBudget = 20000;
    expect(daysInBudget(fixedBudget, ratePerHour)).toBe(28);
});

test('calculate the number of working days until the budget is exhausted', () => {
    const ratePerHour = 25;
    const fixedBudget = 1280;
    expect(daysInBudget(fixedBudget, ratePerHour)).toBe(6);
});

test('calculate the price with monthly discount', () => {
    const ratePerHour = 89;
    const numberOfDays = 230;
    const monthlyDiscount = 0.42;
    expect(priceWithMonthlyDiscount(ratePerHour, numberOfDays, monthlyDiscount)).toBe(97972);
});

test('calculate the price with monthly discount', () => {
    const ratePerHour = 16;
    const numberOfDays = 130;
    const monthlyDiscount = 0.15;
    expect(priceWithMonthlyDiscount(ratePerHour, numberOfDays, monthlyDiscount)).toBe(14528);
});
const { EXPECTED_MINUTES_IN_OVEN,
    remainingMinutesInOven,
    preparationTimeInMinutes,
    totalTimeInMinutes } = require('./lasagna');

test('proper time in the oven', () => {
    expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
});

test('how many minutes in the oven left', () => {
    expect(remainingMinutesInOven(25)).toBe(15);
    expect(remainingMinutesInOven(40)).toBe(0);
    expect(remainingMinutesInOven(0)).toBe(40);
});

test('total preparation time', () => {
    expect(preparationTimeInMinutes(1)).toBe(2);
    expect(preparationTimeInMinutes(2)).toBe(4);
    expect(preparationTimeInMinutes(8)).toBe(16);
});

test('total preparation and baking time', () => {
    expect(totalTimeInMinutes(1, 5)).toBe(7);
    expect(totalTimeInMinutes(4, 15)).toBe(23);
    expect(totalTimeInMinutes(1, 30)).toBe(32);
});

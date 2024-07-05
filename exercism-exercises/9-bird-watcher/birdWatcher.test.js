const { totalBirdCount, birdsInWeek, fixBirdCountLog } = require('./birdWatcher')

test('counts total number of birds', () => {
    expect(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1])).toBe(34);
})

test('counts birds in a specific week', () => {
    expect(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2)).toBe(12);
    expect(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 1)).toBe(22);
})

test('fix a counting mistake', () => {
    expect(fixBirdCountLog([2, 5, 0, 7, 4, 1])).toEqual([3, 5, 1, 7, 5, 1]);
})
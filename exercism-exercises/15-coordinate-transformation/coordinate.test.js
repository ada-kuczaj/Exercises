const { translate2d, scale2d, composeTransform, memoizeTransform } = require('./coordinate');

test('should return a function', () => {
    expect(typeof translate2d(0, 0)).toBe('function');
});

test('translating the coordinates', () => {
    const moveCoordinatesRight2Px = translate2d(2, 0);
    expect(moveCoordinatesRight2Px(4, 8)).toEqual([6, 8]);
});

test('scaling the coordinates', () => {
    const doubleScale = scale2d(6, -3);
    expect(doubleScale(2, 2)).toEqual([12, -6]);
});

test('should compose two scale functions', () => {
    const sx = 3;
    const sy = 2;
    const scaler = scale2d(sx, sy);
    const composeScale = composeTransform(scaler, scaler);
    expect(composeScale(1, 1)).toEqual([9, 4]);
});

test('should compose two translate functions', () => {
    const dx = -6;
    const dy = 10;
    const translator = translate2d(dx, dy);
    const composeTranslate = composeTransform(translator, translator);
    expect(composeTranslate(0, 0)).toEqual([-12, 20]);
});

test('should compose in the correct order g(f(x))', () => {
    const dx = -6;
    const dy = 10;
    const sx = 3;
    const sy = 2;
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    const composed = composeTransform(scaler, translator);
    expect(composed(0, 0)).toEqual([-6, 10]);
});

test('should compose in the correct order f(g(x))', () => {
    const dx = -6;
    const dy = 10;
    const sx = 3;
    const sy = 2;
    const translator = translate2d(dx, dy);
    const scaler = scale2d(sx, sy);
    const composed = composeTransform(translator, scaler);
    expect(composed(0, 0)).toEqual([-18, 20]);
});

test('should recalculate when a new function is passed in', () => {
    const sumFunction = (x, y) => x + y;
    const differenceFunction = (x, y) => x - y;
    const memoizedSum = memoizeTransform(sumFunction);
    const memoizedDifference = memoizeTransform(differenceFunction);
    expect(memoizedSum(1, 2)).toEqual(3);
    expect(memoizedDifference(1, 2)).toEqual(-1);
});

test('should only remember the last result', () => {
    const mockFunction = jest.fn((x, y) => [x * 2, y * 2]);
    const memoizedTransform = memoizeTransform(mockFunction);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(memoizedTransform(2, 2)).toEqual([4, 4]);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(mockFunction).toBeCalledTimes(3);
});

test('should not call the memoized function if the imput is the same', () => {
    const fakeTransform = jest.fn((x, y) => [1, 1]);
    const memoizedTransform = memoizeTransform(fakeTransform);
    expect(memoizedTransform(5, 5)).toEqual([1, 1]);
    expect(memoizedTransform(5, 5)).toEqual([1, 1]);
    expect(fakeTransform).toBeCalledTimes(1);
});
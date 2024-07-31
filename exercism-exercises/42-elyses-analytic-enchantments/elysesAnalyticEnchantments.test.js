const { getCardPosition, doesStackIncludeCard, isEachCardEven, doesStackIncludeOddCard, getFirstOddCard, getFirstEvenCardPosition } = require('./elysesAnalyticEnchantments')

test('getCardPosition > when it is the first card', () => {
    expect(getCardPosition([1, 2, 3], 1)).toBe(0);
});

test('getCardPosition > when the card is not found', () => {
    expect(getCardPosition([1, 2, 3], 4)).toBe(-1);
});

test('doesStackIncludeCard > when a card is not found', () => {
    expect(doesStackIncludeCard([1, 2, 3], 1)).toBe(true);
});

test('doesStackIncludeCard > when the card is not found', () => {
    expect(doesStackIncludeCard([1, 2, 3], 4)).toBe(false);
});

test('ifEachCardEven > when any card is odd', () => {
    expect(isEachCardEven([2, 4, 6])).toBe(true);
});

test('ifEachCardEven > when all cards are even', () => {
    expect(isEachCardEven([2, 5, 6])).toBe(false);
});

test('doesStackIncludeOddCard > should be true if odd number card is found', () => {
    expect(doesStackIncludeOddCard([2, 5])).toBe(true);
});

test('doesStackIncludeOddCard > should be false if no odd number card is found', () => {
    expect(doesStackIncludeOddCard([2, 4, 6])).toBe(false);
});

test('getFirstOddCard > should return the first odd card found', () => {
    expect(getFirstOddCard([2, 4, 1, 3])).toBe(1);
});

test('getFirstOddCard > should return undefined if odd card is not found', () => {
    expect(getFirstOddCard([4, 2, 6])).toBeUndefined();
});

test('getFirstEvenCardPosition > should return position of first even card', () => {
    expect(getFirstEvenCardPosition([2, 4, 1, 3])).toBe(0);
});

test('getFirstEvenCardPosition > should return -1 when the card is not found', () => {
    expect(getFirstEvenCardPosition([1, 3, 5])).toBe(-1);
});
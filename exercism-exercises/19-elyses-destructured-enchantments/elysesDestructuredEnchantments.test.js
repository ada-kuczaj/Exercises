const { getFirstCard, getSecondCard, swapTopTwoCards, discardTopCard, insertFaceCards } = require('./elysesDestructuredEnchantments')

test('getFirstCard from a deck with one card', () => {
    expect(getFirstCard([3])).toBe(3);
});

test('getFirstCard from a deck with many cards', () => {
    expect(getFirstCard([8, 3, 9, 5])).toBe(8);
});

test('getFirstCard from an empty deck', () => {
    expect(getFirstCard([])).toBe(undefined);
});

test('getSecondCard from a deck with two cards', () => {
    expect(getSecondCard([10, 4])).toBe(4);
});

test('getSecondCard from a deck with many cards', () => {
    expect(getSecondCard([2, 5, 1, 6])).toBe(5);
});

test('getSecondCard from an empty deck', () => {
    expect(getSecondCard([])).toBe(undefined);
});

test('getSecondCard from a deck with one card', () => {
    expect(getSecondCard([8])).toBe(undefined);
});

test('swapTopTwoCards from a deck with two cards', () => {
    expect(swapTopTwoCards([3, 6])).toStrictEqual([6, 3]);
});

test('swapTopTwoCards from a deck with many cards', () => {
    expect(swapTopTwoCards([10, 4, 3, 7, 8])).toStrictEqual([4, 10, 3, 7, 8]);
});

test('discardTopCard from a deck with one card', () => {
    expect(discardTopCard([7])).toStrictEqual([7, []]);
});

test('discardTopCard from a deck with many cards', () => {
    expect(discardTopCard([9, 2, 10, 4])).toStrictEqual([9, [2, 10, 4]]);
});

test('insertFaceCards into a deck with many cards', () => {
    expect(insertFaceCards([3, 10, 7])).toStrictEqual([3, 'jack', 'queen', 'king', 10, 7,]);
});

test('insertFaceCards into a deck with one card', () => {
    expect(insertFaceCards([9])).toStrictEqual([9, 'jack', 'queen', 'king']);
});

test('insertFaceCards into a deck with no cards', () => {
    expect(insertFaceCards([])).toStrictEqual([undefined, 'jack', 'queen', 'king']);
});




const { getItem, setItem, insertItemAtTop, removeItem, removeItemFromTop, insertItemAtBottom, removeItemAtBottom, checkSizeOfStack } = require('./elyses')

test('return the card at index position', () => {
    expect(getItem([0, 1, 2, 3, 4], 3)).toBe(3);
    expect(getItem([7, 1, 5, 2, 9], 2)).toBe(5);
});

test('return the card at index position', () => {
    expect(setItem([0, 1, 2, 3, 4], 3, 9)).toEqual([0, 1, 2, 9, 4]);
    expect(setItem([7, 1, 5, 2, 9], 2, 2)).toEqual([7, 1, 2, 2, 9]);
    expect(setItem([1, 2, 4, 1], 2, 6)).toEqual([1, 2, 6, 1]);
});

test('return the card at index position', () => {
    expect(insertItemAtTop([5, 9, 7, 1], 8)).toEqual([5, 9, 7, 1, 8]);
    expect(insertItemAtTop([1, 2, 4, 1], 6)).toEqual([1, 2, 4, 1, 6]);
});

test('return the card at index position', () => {
    expect(removeItem([3, 2, 6, 4, 8], 2)).toEqual([3, 2, 4, 8]);
    expect(removeItem([1, 2, 4, 1], 0)).toEqual([2, 4, 1]);
});

test('return the card at index position', () => {
    expect(removeItemFromTop([3, 2, 6, 4])).toEqual([3, 2, 6]);
    expect(removeItemFromTop([1, 2, 4, 1])).toEqual([1, 2, 4]);
});

test('return the card at index position', () => {
    expect(insertItemAtBottom([3, 2, 6, 4], 1)).toEqual([1, 3, 2, 6, 4]);
    expect(insertItemAtBottom([1, 2, 4, 1], 1)).toEqual([1, 1, 2, 4, 1]);
});


test('return the card at index position', () => {
    expect(removeItemAtBottom([3, 2, 6, 4])).toEqual([2, 6, 4]);
    expect(removeItemAtBottom([1, 2, 4, 1])).toEqual([2, 4, 1]);
});

test('return the card at index position', () => {
    expect(checkSizeOfStack([3, 2, 6, 4], 2)).toEqual(false);
    expect(checkSizeOfStack([1, 2, 4, 1], 4)).toEqual(true);
});

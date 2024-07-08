const { twoSum, luckyNumber, errorMessage } = require('./luckyNumbers')

test('calculate the sum of two numbers from arrays', () => {
    const leftInput = [1, 2, 4, 0, 3, 5, 2, 9];
    const rightInput = [3, 2, 4, 8, 1, 5, 4, 1, 8];
    expect(twoSum(leftInput, rightInput)).toBe(337218947);
    expect(twoSum([1, 2, 3], [0, 7])).toBe(130);
});

test('checking if the number is palindrome', () => {
    expect(luckyNumber(1441)).toBe(true);
    expect(luckyNumber(123)).toBe(false);
});


test('checking error message text', () => {
    expect(errorMessage('123')).toBe('');
    expect(errorMessage('')).toBe('Required field');
    expect(errorMessage('abc')).toBe('Must be a number besides 0');
});



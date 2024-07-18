const { findLongestElement, padLeftToLength, transpose } = require('./transpose')

test('findLongestElement - multiple strings', () => {
    const input = ["apple", "banana", "cherry"];
    const expected = 6;
    expect(findLongestElement(input)).toBe(expected);
});

test('findLongestElement - single string', () => {
    const input = ["single"];
    const expected = 6;
    expect(findLongestElement(input)).toBe(expected);
});

test('findLongestElement - empty array', () => {
    const input = [];
    const expected = null;
    expect(findLongestElement(input)).toBe(expected);
});

test('findLongestElement - same length strings', () => {
    const input = ["same", "size", "word"];
    const expected = 4;
    expect(findLongestElement(input)).toBe(expected);
});

test('padLeftToLength - pad word to length', () => {
    const word = "apple";
    const length = 10;
    const expected = "     apple";
    expect(padLeftToLength(word, length)).toBe(expected);
});

test('padLeftToLength - word already at length', () => {
    const word = "toolong";
    const length = 7;
    const expected = "toolong";
    expect(padLeftToLength(word, length)).toBe(expected);
});

test('padLeftToLength - empty word', () => {
    const word = "";
    const length = 5;
    const expected = "     ";
    expect(padLeftToLength(word, length)).toBe(expected);
});

test('padLeftToLength - no padding needed', () => {
    const word = "word";
    const length = 4;
    const expected = "word";
    expect(padLeftToLength(word, length)).toBe(expected);
});

test('two characters in a row', () => {
    const input = ['A1'];
    const expected = ['A', '1'];
    expect(transpose(input)).toEqual(expected);
});

test('simple', () => {
    const input = ['ABC', '123'];
    const expected = ['A1', 'B2', 'C3'];
    expect(transpose(input)).toEqual(expected);
});
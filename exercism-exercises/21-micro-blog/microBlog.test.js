const { truncate } = require('./microBlog')

test('English language short', () => {
    const inputString = 'Hi';
    const expected = 'Hi';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('English language long', () => {
    const inputString = 'Hello there';
    const expected = 'Hello';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('German language short', () => {
    const inputString = 'brühe';
    const expected = 'brühe';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('German language long', () => {
    const inputString = 'Bärteppich';
    const expected = 'Bärte';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('Bulgarian language short', () => {
    const inputString = 'Добър';
    const expected = 'Добър';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('Maths short', () => {
    const inputString = 'a=πr²';
    const expected = 'a=πr²';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('Maths long', () => {
    const inputString = '∅⊊ℕ⊊ℤ⊊ℚ⊊ℝ⊊ℂ';
    const expected = '∅⊊ℕ⊊ℤ';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('English and emoji short', () => {
    const inputString = 'Fly 🛫';
    const expected = 'Fly 🛫';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('Emoji short', () => {
    const inputString = '💇';
    const expected = '💇';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});

test('Emoji long', () => {
    const inputString = '❄🌡🤧🤒🏥🕰😀';
    const expected = '❄🌡🤧🤒🏥';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
});
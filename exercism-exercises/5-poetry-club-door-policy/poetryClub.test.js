const { frontDoorResponse, frontDoorPassword, concatenationOfFirstLetters, backDoorResponse, concatenationOfLastLetters, backDoorPassword } = require('./poetryClub')

test('returns the first letter of the poem line', () => {
    const poemLine = 'Stands so high';
    expect(frontDoorResponse(poemLine)).toBe('S');
});

test('returns concatenated first letters of each poem line', () => {
    const SUMMER = [
        'Sunshine warming my toes,',
        'Underwater fun with my friends.',
        'Making homemade ice cream on the porch,',
        'Many long nights catching fireflies.',
        'Early morning walks to the creek,',
        'Reveling in the freedom of lazy days.',
    ];
    expect(concatenationOfFirstLetters(SUMMER)).toBe('SUMMER');
});

test('lowercase the letters of the password except the first one', () => {
    const password = 'SUMMER';
    expect(frontDoorPassword(password)).toBe('Summer');
});

test('returns the last letter of the poem line', () => {
    const poemLine = 'Stands so high';
    expect(backDoorResponse(poemLine)).toBe('h');
});

test('returns concatenated last letters of each poem line', () => {
    const HORSE = [
        'Stands so high',
        'Huge hooves too ',
        'Impatiently waits for',
        '   Reins and harness ',
        'Eager to leave',];
    expect(concatenationOfLastLetters(HORSE)).toBe('horse');
});

test('returns the correct sentence of back password', () => {
    const password = 'horse';
    expect(backDoorPassword(password)).toBe('Horse, please');
});
const { toRoman } = require('./romanNumerals');

test('toRoman converts 1', () => {
    expect(toRoman(1)).toEqual('I');
});
test('toRoman converts 4', () => {
    expect(toRoman(4)).toEqual('IV')
});
test('toRoman converts 16', () => {
    expect(toRoman(16)).toEqual('XVI')
});
test('toRoman converts 48', () => {
    expect(toRoman(48)).toEqual('XLVIII')
});
test('toRoman converts 66', () => {
    expect(toRoman(66)).toEqual('LXVI')
});
test('toRoman converts 141', () => {
    expect(toRoman(141)).toEqual('CXLI')
});
test('toRoman converts 402', () => {
    expect(toRoman(402)).toEqual('CDII')
});
test('toRoman converts 575', () => {
    expect(toRoman(575)).toEqual('DLXXV')
});
test('toRoman converts 1024', () => {
    expect(toRoman(1024)).toEqual('MXXIV')
});
test('toRoman converts 3000', () => {
    expect(toRoman(3000)).toEqual('MMM')
});
test('toRoman converts 3999', () => {
    expect(toRoman(3999)).toEqual('MMMCMXCIX')
});


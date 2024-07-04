const { buildSign, buildBirthdaySign, graduationFor, costOf } = require('./customSigns')

test('check the bulid sign text', () => {
    expect(buildSign('Birthday', 'Rob')).toBe('Happy Birthday Rob!');
});

test('check the birthday sign text', () => {
    expect(buildBirthdaySign(61)).toBe('Happy Birthday! What a mature fellow you are.');
});

test('check the graduation sign text', () => {
    expect(graduationFor('Hannah', '2024')).toBe('Congratulations Hannah!\nClass of 2024');
});

test('check the sign cost calculation', () => {
    expect(costOf('Happy Birthday Rob!', 'dollars')).toBe('Your sign costs 58.00 dollars.');
});
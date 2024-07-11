const { twoFer } = require('./twoFer')

test('give cookies for the person you know', () => {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
});

test('give cookies to a stranger', () => {
    expect(twoFer()).toEqual('One for you, one for me.');
});
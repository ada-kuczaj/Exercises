const hello = require('./hello')

test('Say Hi!', () => {
  expect(hello()).toBe('Hello, World!');
});

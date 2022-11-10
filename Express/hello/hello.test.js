const { hello } = require("./hello");

test('hello returns Hello name', () => {
  expect(hello('Romain')).toBe('Hello Romain');
});

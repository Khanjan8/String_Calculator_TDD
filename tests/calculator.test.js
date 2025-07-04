const { add } = require('../src/calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number when a single number is passed', () => {
  expect(add("1")).toBe(1);
});

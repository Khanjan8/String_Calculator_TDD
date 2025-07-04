const { add } = require('../src/calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number when a single number is passed', () => {
  expect(add("1")).toBe(1);
});

test('returns sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum of any number of comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles newlines as valid delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter ;', () => {
  expect(add("//;\n1;2")).toBe(3);
});

const { add } = require('../src/calculator');

describe("Basic Addition Cases", () => {
  test.each([
    ["empty string", "", 0],
    ["single number", "1", 1],
    ["two comma-separated numbers", "1,2", 3],
    ["multiple comma-separated numbers", "1,2,3,4", 10],
    ["mixed commas and newlines", "1\n2,3", 6]
  ])("returns correct sum for %s", (_, input, expected) => {
    expect(add(input)).toBe(expected);
  });
});

describe("Custom Delimiter Support", () => {
  test.each([
    ["semicolon", "//;\n1;2", 3],
    ["semicolon with newline", "//;\n1;2\n3", 6],
    ["dollar symbol", "//$\n7$8$9", 24],
    ["hash with comma and newline", "//#\n1#2,3\n4", 10]
  ])("handles custom delimiter: %s", (_, input, expected) => {
    expect(add(input)).toBe(expected);
  });
});

describe("Negative Number Handling", () => {
  test("throws error for single negative number", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test("throws error for multiple negative numbers", () => {
    expect(() => add("-1,-4,5")).toThrow("negative numbers not allowed: -1,-4");
  });
});

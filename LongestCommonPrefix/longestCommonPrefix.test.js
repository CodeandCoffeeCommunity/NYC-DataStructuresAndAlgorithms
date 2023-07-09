const { longestCommonPrefix, TESTS, NAME } = require('./LongestCommonPrefix');

describe(`${NAME}`, () => {
  test.each(TESTS)
    ('%p: %p -> %p', (description, input, output) => {
      expect(longestCommonPrefix(input)).toBe(output);
    });
});

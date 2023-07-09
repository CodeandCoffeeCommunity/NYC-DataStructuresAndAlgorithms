const {longestCommonPrefix, TESTS} = require('./LongestCommonPrefix');

test.each(TESTS)
('%p: %p -> %p', (description, input, output) => {
  expect(longestCommonPrefix(input)).toBe(output);
});

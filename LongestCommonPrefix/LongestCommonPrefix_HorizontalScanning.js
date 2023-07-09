//Strategy: 
const _strategy =
  `
  reduce size of matching prefix as each index(reverse iterated) is confirmed to be either matching or not.
  `

//Explanation
const _explanation =
  `
  String.indexOf -> finds first index of the search term inside the search space

   0    5    10   15    20
   |    |    |    |     | 
  "the quick brown fox", "fox":16 | "the":0 | "hello": -1 (undefined)| "he":1

  It doesn't matter which word is the "seed", or initial check

  ["hello", "help", "here", "wall", "hellofromtheothersiiiiiide"]

  .substring reduces the search term

  "hello" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
  "help" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
  "here" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
  "wall" --> no matches
  "hellofromtheothersiiiiiide" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
`
//Plan
/*
  if length zero return empty
  get first word
  loop over all words
    loop while the index of the prefix for each word is not 0
      decrement the prefix length
      if prefix less than 1 return empty

  return the what is left of the prefix

 */
const _time = `O(N)`;

const _space = `O(1)`;

//Code:
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length < 1) return "";
    }
  }
  return prefix;
}

const NAME = "Horizontal Scanning";
const STRATEGY = _strategy;
const EXPLANATION = _explanation;
const TIME = _time;
const SPACE = _space;

module.exports = { longestCommonPrefix, NAME, STRATEGY, EXPLANATION, TIME, SPACE };

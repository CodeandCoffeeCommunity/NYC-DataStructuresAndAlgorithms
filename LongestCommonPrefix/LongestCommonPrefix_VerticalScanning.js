///Strategy: 
const _strategy =
  `
  for each index of a word, check the character value of against the character value of the corresponding index in the rest of the words
`;

//Explanation
const _explanation =
  `
|
hello
help
here
hellofromwaydownheeeere
----- "hello" match "h"

 |
hello
help
here
hellofromwaydownheeeere
----- "hello" match "he"

  |
hello
help
here
hellofromwaydownheeeere
----- *X* "hello" match "he"

|
hello
help
here
coffee
----- *X* "hello" match ""
`;

//Plan
/*
  check if null or 0 length
  for each letter in the first word, check value at each word in the set
  when no match, break with substring up to that index
 */
const _time = `O(N)`;

const _space = `O(1)`;

//Code:
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (i == strs[j].length || strs[j][i] != char) return strs[0].substring(0, i);
    }
  }
  return strs[0];
}

const NAME = "Vertial Scanning";
const STRATEGY = _strategy;
const EXPLANATION = _explanation;
const TIME = _time;
const SPACE = _space;

module.exports = { longestCommonPrefix, NAME, STRATEGY, EXPLANATION, TIME, SPACE };


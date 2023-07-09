//Strategy: 
const _strategy =
  `
The longest common prefix of the full set is equal to the 
longest common prefix of the longest common prefix of two subsets
`;


//Explanation
const _explanation =
  `
If you divide the set into subsets such that you find the longest common prefix among the smaller sets, you will be left with two common prefixes to each of those subsets.
You can then compare those two for their common prefix and resolve to an answer

"hello", "help", "here", "hellofromtheothersiiiiide"

"hello", "help"      |     "here", "hellofromtheothersiiiiide"
      "hel"          |           "he"
                    "he"

---------------------------------------------------------------

"hello", "help", "here", "coffee" "hellofromtheothersiiiiide"

"hello", "help"      |     "here", "coffee", "hellofromtheothersiiiiide"
      "hel"          |           "here", "coffee"      |    "hellofromtheothersiiiiide"
      "hel"          |                 ""              |     "hellofromtheothersiiiiide"      
      "hel"          |                                ""
                     ""
`;

//Plan
/*
  Three functions: solution, helper(divide), commonPrefix(conquer)

  solution
    check null or zero length return ""
    run helper

  helper
    if left = right reutrn full word at l

    mid
    lft = helper(...mid
    rgt = helper(mid +1 ..
    commonprefix


    commonprefix
      get shorter of two inputs
      check each letter in the shorter input
        if value at index don't match
          return subsring up to index

      return substring 0 to min length
 
 */

const _time = `O(N)`;

const _space = `O(M*Log(N))`;

//Code:
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return "";
  return longestCommonPrefix_helper(strs, 0, strs.length - 1);

  function longestCommonPrefix_helper(strs, l, r) {
    if (l === r) {
      return strs[l];
    }
    else {
      let mid = Math.floor((l + r) / 2);
      let lcpLeft = longestCommonPrefix_helper(strs, l, mid);
      let lcpRight = longestCommonPrefix_helper(strs, mid + 1, r);
      return commonPrefix(lcpLeft, lcpRight);
    }
  }

  function commonPrefix(left, right) {
    let min = Math.min(left.length, right.length);
    for (let i = 0; i < min; i++) {
      if (left[i] != right[i])
        return left.substring(0, i);
    }
    return left.substring(0, min);
  }
}

const NAME = "Divide and Conquer";
const STRATEGY = _strategy;
const EXPLANATION = _explanation;
const TIME = _time;
const SPACE = _space;

module.exports = { longestCommonPrefix, NAME, STRATEGY, EXPLANATION, TIME, SPACE };

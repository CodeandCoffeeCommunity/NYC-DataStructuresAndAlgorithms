//Strategy: 
const _strategy =
  `
   Get the maximum possible size of a common prefix by finding the shortest word in the set.
   
   Modify search space by binary search by moving the "middle" of the search to the point where the prefixes no longer match

  `;


//Explanation
const _explanation =
  `
"hello", "help", "here", "hellofromtheothersiiiiide"

"help"  or "here"

assume "help" is chosen

"help"

substring(0, middle) "he"

- Do all strings "hello", "help", "here", "hellofromtheothersiiiiide" start with "he" --> YES 
substring(0, middle) "hel"
- Do all strings "hello", "help", "here", "hellofromtheothersiiiiide" start with "hel" --> NO

Answer: substring(0, middle) "he"
----------------------------------------------------------------------

"hello", "hellothere", "hellacool", "hellofromtheothersiiiiide"

"hello" is chosen as shortest

substring(0, middle) "hel"

- Do all strings "hello", "hellothere", "hellacool", "hellofromtheothersiiiiide" start with "hel" --> YES

substring(0, middle) "hell"
- Do all strings "hello", "hellothere", "hellacool", "hellofromtheothersiiiiide" start with "hell" --> YES

substring(0, middle) "hello"
- Do all strings "hello", "hellothere", "hellacool", "hellofromtheothersiiiiide" start with "hello" --> NO

Answer: substring(0, middle) "hell"

  `;
//Plan
/*
    Two functions: solution and check isCommonPrefix  

    isCommonPrefix:
      get a substring
      for each word in the set,
        check if the word starts with the string.


    solution:
      get shortest word
      
      while left <= right
        get middle
        check if iscomonprefix within substring of 0 to middle
          yes: move middle right
          no: move middle left

      return the fist string with a substring that goes from 0 to middle


 */


const _time = `O(N * Log(M))`;

const _space = `O(1)`;

//Code:
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return "";

  let maxLen = Number.MAX_SAFE_INTEGER;

  for (const str of strs) {
    maxLen = Math.min(maxLen, str.length);
  }

  let low = 0;
  let high = maxLen;
  let middle;

  while (low <= high) {
     middle = Math.floor((low + high) / 2);
    if (isCommonPrefix(strs, middle))
      low = middle + 1;
    else
      high = middle - 1;
  }

  return strs[0].substring(0, middle);

  function isCommonPrefix(strs, len) {
    let str1 = strs[0].substring(0, len);

    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(str1)) return false;
    }

    return true;
  }
}

const NAME = "Binary Search";
const STRATEGY = _strategy;
const EXPLANATION = _explanation;
const TIME = _time;
const SPACE = _space;

module.exports = { longestCommonPrefix, NAME, STRATEGY, EXPLANATION, TIME, SPACE };


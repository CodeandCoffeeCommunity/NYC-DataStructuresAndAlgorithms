/*
    Longest Common Prefix 
    -------------------------------------------------------------------------------------

    An *EASY* problem solved 5 ways

    Link: https://leetcode.com/problems/longest-common-prefix/description/

    -------------------------------------------------------------------------------------
    Problem Statement:

    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
     

    Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

    -------------------------------------------------------------------------------------
     
    *Framework*
      Explore

      Brainstorm

      Plan

      Implement

      Verify

    -------------------------------------------------------------------------------------

    Explore:
      Inputs: 
      ["flower"]- atleast 1 element -> "flower"
      ["","","",""] --> ""
      ["  ", "     ", "       "] -> won't occur because only lowercase chars

   Brainstorm 
     Solutions 
        1. Horizontal Scanning - *
            comparing already known common prefix as you iterate over the list
        2. Vertical Scanning -
            compare first letter in each word until you don't have a match, or you've exceeded the length of one of the words being compared. 
        3. Divide and Conquer - *
            break array into smaller chunks to compare against 
        4. Binary Search - *
            Taking one word, taking its first half and comparing, incrementing/decrement its size as you find matches.  
        5. Sort and Scan - 
            order the list or string, vertically scan.
        6. Trie
            -

        Note: 
          * Output will be at most as long as the shortest string
    
    Complexity Analysis
      1. Horizontal Scanning **
         Time:O(N*M) , O(N) in respect to the array
         N size of array
         M size of the word.length
         Space: O(1)
      3. Divide and Conquer
          Time: O(LogN) , O(NLog(N))
          Space: O(MLog(N))
      4. Binary Search
          Time: O(NLog(M))
          Space: O(MLog(N))
      5) BEAST MODE: Trie 

    Plan Chosen:
      Horizontal Scanning:

 /*
  check if empty array return ""
  let result = first word
  check if length of array is 1 return first word


  //conpare to each other string
  for loop over each word in the input array
    //check for each letter to match the stored result 
      for loop
        check index of the word to the same index of the stored result if same

 */
/*
String.indexOf
 0    5    10   15    20
   |    |    |    |     | 
  "the quick brown fox", "fox":16           | "the":0 | "hello": -1 (undefined)| "he":1

  It doesn't matter which word is the "seed", or initial check

  ["hello", "help", "here", "wall", "hellofromtheothersiiiiiide"]

  .substring reduces the search term

  "hello" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
  "help" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
  "here" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
  "wall" --> no matches
  "hellofromtheothersiiiiiide" --> matches "he" on ["hello", "help", "here", "hellofromtheothersiiiiiide"]
`


  //if length zero return empty
//  get first word
 // loop over all words
//    loop while the index of the prefix for each word is not 0
      decrement the prefix length
      if prefix less than 1 return empty

  return the what is left of the prefix

*/

//Implement

//1. Horizontal Scanning
const NAME = "Horizontal Scanning"
var longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let result = strs[0];
  if (strs.length === 1) return result;

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (result[j] && strs[i][j] && result[j] === strs[i][j]) {
      j++;
    }

    result = strs[i].substring(0, j);
  }

  return result;
}

//2. Vertical Scanning
//const NAME = "Vertical Scanning"
/*
var longestCommonPrefix = (strs) => {
  return "";
}
 */

//3. Divide and Conquer
//const NAME = "Divide and Conquer"
/*
var longestCommonPrefix = (strs) => {
  return "";
}
 */

//4. Binary Search
//const NAME = "Binary Search"
/*
var longestCommonPrefix = (strs) => {
  return "";
}
 */

// 5. Sort and Scan
//const NAME = "Sort and Scan"
/*
   var = longestCommonPrefix(){
   return "";
   }
 */

//Tests
const TESTS = [
  ["Empty input", [], ""],
  ["Two letters in prefix match", ["flower", "flow", "flight"], "fl"],
  ["One word has no matching prefix characters", ["flower", "flow", "Coffee"], ""],
  ["One word in input", ["flower"], "flower"],
  ["All words the same", ["flower", "flower", "flower"], "flower"],
  ["Different capitalization", ["Flower", "flower", "FLOWER"], ""],
  ["empty string list", ["", "", "", ""], ""],
];


//Solutions
//const { longestCommonPrefix, NAME, STRATEGY, EXPLANATION, TIME, SPACE } =
//require('./LongestCommonPrefix_HorizontalScanning.js'); //1. Horizontal Scanning
//require('./LongestCommonPrefix_VerticalScanning.js'); //2. Vertical Scanning
//require('./LongestCommonPrefix_DivideAndConquer.js'); //3. Divide and Conquer
//require('./LongestCommonPrefix_BinarySearch.js'); //4. Binary Search
//require('./LongestCommonPrefix_SortAndScan.js'); // 5. Sort and Scan

//const printSolution = require('./printSolution.js').printSolution;
//printSolution(NAME, STRATEGY, EXPLANATION, TIME, SPACE, longestCommonPrefix);

module.exports = { longestCommonPrefix, TESTS, NAME };

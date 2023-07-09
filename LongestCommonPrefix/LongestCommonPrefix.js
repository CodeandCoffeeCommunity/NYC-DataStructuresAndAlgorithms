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
      Outputs:

      Happy Case:
      1.
      2.
      3.

      Edge Case:
      1.
      2.
      3.


   Brainstorm 
     Solutions 
        1. Horizontal Scanning
        2. Vertical Scanning
        3. Divide and Conquer
        4. Binary Search
        5. Sort and Scan
 

    
    Complexity Analysis
      1. Horizontal Scanning
      2. Vertical Scanning
      3. Divide and Conquer
      4. Binary Search
      5. Sort and Scan
 

    Plan Chosen:

 */

//Implement

//1. Horizontal Scanning
/*
const NAME = "Horizontal Scanning"
var longestCommonPrefix = (strs) => {
  return "";
}
*/

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
  ["Not implemented", [], ""],
  ["Not implemented", [], ""],
];


//Solutions
const { longestCommonPrefix, NAME, STRATEGY, EXPLANATION, TIME, SPACE } =
  //1. Horizontal Scanning
  require('./LongestCommonPrefix_HorizontalScanning.js');
//2. Vertical Scanning
//require('./LongestCommonPrefix_VerticalScanning.js');
//3. Divide and Conquer
//require('./LongestCommonPrefix_DivideAndConquer.js')
//4. Binary Search
//require('./LongestCommonPrefix_BinarySearch.js');
// 5. Sort and Scan
//require('./LongestCommonPrefix_SortAndScan.js');

const printSolution = require('./printSolution.js').printSolution;
printSolution(NAME, STRATEGY, EXPLANATION, TIME, SPACE, longestCommonPrefix);

module.exports = { longestCommonPrefix, TESTS, NAME };
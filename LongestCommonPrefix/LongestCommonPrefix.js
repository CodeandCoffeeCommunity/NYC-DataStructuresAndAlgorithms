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

/*    function longestCommonPrefix(){
      return "";
    } */

//1. Horizontal Scanning
//const longestCommonPrefix = require('./LongestCommonPrefix_HorizontalScanning.js');
/*
   function longestCommonPrefix(){
   return "";
   }
 */

//2. Vertical Scanning
//const longestCommonPrefix = require('./LongestCommonPrefix_VerticalScanning.js');
/*
  function longestCommonPrefix(){
  return "";
  }
 */

//3. Divide and Conquer
//const longestCommonPrefix = require('./LongestCommonPrefix_DivideAndConquer.js');
/*
  function longestCommonPrefix(){
  return "";
  }
 */

//4. Binary Search
//const longestCommonPrefix = require('./LongestCommonPrefix_BinarySearch.js');
/*
  function longestCommonPrefix(){
  return "";
  }
 */

// 5. Sort and Scan
/*
  function longestCommonPrefix(){
  return "";
  }
 */

//Verify
const { longestCommonPrefix, NAME, STRATEGY, EXPLANATION } =
  //1. Horizontal Scanning
  //require('./LongestCommonPrefix_HorizontalScanning.js');
  //2. Vertical Scanning
  //require('./LongestCommonPrefix_VerticalScanning.js');
  //3. Divide and Conquer
  //require('./LongestCommonPrefix_DivideAndConquer.js')
  //4. Binary Search
  require('./LongestCommonPrefix_BinarySearch.js');
// 5. Sort and Scan
//require('./LongestCommonPrefix_SortAndScan.js');

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

module.exports = { longestCommonPrefix, TESTS, NAME };

const printSolution = require('./printSolution.js');
printSolution.printSolution(NAME, STRATEGY, EXPLANATION, longestCommonPrefix);
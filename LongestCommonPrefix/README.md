# How To Present

## Workshop
1. Read problem statement
2. Go over problem solving framework
3. Explore
4. Create Test Cases
5. Brainstorm
6. Choose one or more solutions and Implement
7. Test
8. Repeat from 6 - 7 until chosen solution passes the tests
9. Reveal solution
10. Repeat 6 - 10 until all solutions implemented
11. Reveal solution comparisons

## Tests
### Test Cases:
Add additional test cases to the following code block in `LongestCommongPrefix.js` 

```
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
```

### Workshop
Modify the and uncomment only the relevant code snippet in `LongestCommongPrefix.js` for whichever solutions you are testing
```
//1. Horizontal Scanning
const NAME = "Horizontal Scanning"
var longestCommonPrefix = (strs) => {
  return "";
}
```
OR

### Solutions
Modify the relevant code snippet in `LongestCommongPrefix.js` for whichever solutions you are testing
```
//Verify
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
```
#### Tests
Run the command:
```
$ jest ./LongestCommonPrefix.test.js
```

#### View Solution
Run the command:
```
$ node ./LongestCommonPrefix.js
```
## Compare Solutions
Run the command:
```
$ node ./compareSolutions.js
```
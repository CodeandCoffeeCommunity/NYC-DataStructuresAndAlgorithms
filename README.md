# NYC-DataStructuresAndAlgorithms
Historic record of problems solved during Code and Coffee Meetup sessions

## Requirements for Submission
All files being considered for inclusion in the repository should follow the template below:

### Repository Structure
Each problem shall be contained within a folder which holds the name of the problem.
Within the folder there must be at minimum two files.
- File containing problem statment in markdown format
- File continaing problem solution in the language file format of the code contained within
 
 The requirements above are enforced for the following reasons.
 - One should be able to review the problem without exposure to the solution
 - One should be able to copy the solution file and run it in their local environment immediately without modification

#### Example File Structure
```bash
|
|__  Two Sum
    |
    |___ Two_Sum.md
    |
    |___ Two_Sum.cs
    
```

### File Name
Where the file is a known LeetCode problem, include the exact title the problem in the title.
Example: Two_Sum

### File Heading
All problem statment files must have a heading following the format below:
```
Original problem is Copyright ©️ 2023 LeetCode All rights reserved.


Title: #1 Two Sum
Link:https://leetcode.com/problems/two-sum/
--------------------------------------------------------------------------

Problem Statement:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Examples:

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

```

### File Extension
- Problem statement files: `*.md`
- Soltion Files: `*.cs`, `*.js`, `*.py`, `etc`

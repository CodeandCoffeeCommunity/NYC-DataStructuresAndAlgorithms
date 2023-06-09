Original problem is Copyright ©️ 2023 LeetCode All rights reserved.

Title: #141 Linked List Cycle
As Presented On: June 04, 2023 : Brainstation Venue

Link: [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
--------------------------------------------------------------------------

Linked List Cycle

Variation:

Complete the following:
 [x] Define a List Node class
 [x] Create a Linked List
 [x] Create a function to convert a Array to a linked List
 [x] Create a function to convert a Linked List to an Array 
 [x] Create a Cycle from that linked list
 - Detect if the linked list is a Cycle
 - Break Cycle and return the list to the original state



LeetCode Problem Below:

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?

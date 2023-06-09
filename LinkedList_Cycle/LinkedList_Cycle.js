/****** Author *******/
//@travispotterBH
/******       *******/

/*
Complete the following:
 - Define a List Node class
 - Create a Linked List
 - Create a function to convert a Linked List to an Array 
 - Create a Cycle from that linked list
 - Detect if the linked list is a Cycle
 - Break Cycle and return the list to the original state
*/

// List Node
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Linked List
const list = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7))))))));


// Create Cycle

const cycle = (head) => {

    if (!head) return head;

    let curr = head;

    while (curr.next) {
        curr = curr.next;
    }

    curr.next = head;

    return head;
};

const listToArray = (head) => {
    let result = [];

    while (head) {
        result.push(head.value);
        head = head.next;
    }

    return result.join("-->");
}


console.log(listToArray(list));

const detectCycleTwoPointer = (head) => {
    let slow = head;
    let fast = head;

    while (slow?.next && fast?.next?.next) {
        if (slow == fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};

const detectCycleSet = (head) => {
    const set = new Set();
    while (head) {
        if (!set.has(head)) {
            set.add(head)
            head = head.next;
        } else {
            return true;
        }
    }

    return false;
};

console.log(detectCycleSet(cycle(list)), "| Expected value is true.");

// Break Cycle
const breakCycleSet = (head) => {
    const set = new Set();

    const sentinel = new Node(null);
    sentinel.next = head;

    let curr = sentinel;

    while (curr.next) {
        if (!set.has(curr.next)) {
            set.add(curr.next)
            curr = curr.next;
        } else {
            curr.next = null;
            break;
        }
    }

    return sentinel.next;
};


console.log(listToArray(breakCycleSet(list)));

console.log(detectCycleSet(list), "| Expected value is false.");

console.log(detectCycleTwoPointer(cycle(list)));




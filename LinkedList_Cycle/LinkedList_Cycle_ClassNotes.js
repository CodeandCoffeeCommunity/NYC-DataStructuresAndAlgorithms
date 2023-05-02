/*
 - Define a List Node class
 - Create a Linked List
 - Create a function to convert a Linked List to an Array
 - Create a Cycle from that linked list
 - Detect if the linked list is a Cycle
 - Break Cycle and return the list to the original state
 -- Bonus: Floyd's cycle finding algorithm ( detect and break)https://abhisekbunty94.medium.com/why-does-floyds-cycle-detection-algorithm-work-59f61984dc3e
 */


// if we have time
// Add to List
// Remove node of target value from list

/*
Node:
( unit of information )
Value : 0, "string"
Next: null/empty, another node


0-> 1 -> 2 -> 3-> 4 -> null
^

class Node {
    constructor(value, next = null){
    this.value = value;
    this.next = next;
    }
}


Singly Linked List --> Circular Linked List. understand its state as circular, break into singly linked list.
LinkedList ==> Node

0 -> 1 ->  2 
      ^----v
    |

0 -> 1 ->  2 
^----------v
|

*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


// 0 1 2 3 4 5 6 7 
const list = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7))))))));

//Create linked list
//create array from linked list

function createLinkedList(array) {
    let sentinel = new Node(null);
    let curr = sentinel;

    //iterative
    for (let i = 0; i < array.length; ++i) {
        //work done
        const node = new Node(array[i]);
        curr.next = node;
        curr = curr.next;
    }
    // result is linked list
    return sentinel.next;
}

//console.log(createLinkedList([0, 1, 2, 3, 4, 5, 6, 7]));

//linked list ! not circular this should always work.

function createArray(linkedList) {
    //input head of linked list
    let result = [];

    //Check if there is a cycle
    //true: break? do nothing
    //false: do the work 

    //work done 
    while (linkedList !== null) {
        //done
        result.push(linkedList.value);
        linkedList = linkedList.next;
    }

    return result;

}


//console.log(createArray(createLinkedList([0, 1, 2, 3, 4, 5, 6, 7])));

const linkedList = createLinkedList([0])
const newNode = new Node(1);
linkedList.next = newNode;
newNode.next = null;

const arr = Array(10000000).fill(1);
const longLinkedList = createLinkedList(arr);

const cycle = (head) => {

    if (!head) return head;

    let curr = head;

    while (curr.next) {
        curr = curr.next;
    }

    curr.next = head;

    return head;
};

const cyclelist = cycle(longLinkedList);


function detectCycle(linkedList) {
    //input : linked list maybe cyclical
    // null --> 10,000,000,000



    //work done:
    let slow = linkedList;
    let fast = linkedList;

    while (fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
}


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
array.sort((a, b) => a - b);

console.log(detectCycle(cyclelist));
//function breakCycle()
//console.log(detectCycle(cyclelist));

//Circular or cyclical
/*0  1  2  3  4   5  6  7
            ^---------v            
|
*/

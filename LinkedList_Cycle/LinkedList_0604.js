/*
 * //Singly Linked List
//

class SingleLLNode {
    constructor(value, next = null){
        this.value = value,
        this.next = next
    }
}


class DblyLLNode {
    constructor(value, prev = null, next = null){
        this.value = value,
        this.next = next, 
        this.prev = prev
    }
}



// Nodes
// LList
|
1 -> 2 -> 3 -> null

value, next node

//singly linked list
const ll = new SingleLLNode(1, new SingleLLNode(2, new SingleLLNode(3, null)));


//Double linked list
// reason? 

const node1 = new DblyLLNode(1);
const node2 = new DblyLLNode(2);
const node3 = new DblyLLNode(3);

node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.prev = node2;
node3.next = null;



//Head
first node in a linked list
//Tail
last node in a linked list

//Uses
- HTMl DOM double linked list
- Double ended queue


*/
class Node{
    constructor(value, next = null){
        this.value = value,
        this.next = next
    }
}
//[]
//[1,2,3,4,5,6]
function arrayToLinkedList(array){
    let sentinel = new Node(null);

    let currNode = sentinel;

    for(let i = 0; i < array.length; i++){
        let node = new Node(array[i]);    
        currNode.next = node;
        currNode = currNode.next;
    }
    return sentinel.next;
}
//console.log(arrayToLinkedList([]));
//console.log(arrayToLinkedList([1,2,3]));


function linkedListToArray(head){
    let currNode = head;
    let result= []; 

    if(detectCycleSet(head)) return "Error";

    while(currNode){
        result.push(currNode.value);
        currNode = currNode.next;
    }

    return result;
}

//console.log(linkedListToArray(null), []);
//console.log(linkedListToArray(arrayToLinkedList([1,2,3,4,5])), [1,2,3,4,5]);


//Cycle
/*
   1 -> 2 -> 3 -> 
        ^       |
        |________
*/

//[1,2,3,4,5,6]
function createCycle(array){
    let sentinel = new Node(null);

    let currNode = sentinel;

    for(let i = 0; i < array.length; i++){
        let node = new Node(array[i]);    
        currNode.next = node;
        currNode = currNode.next;
    }

    if(sentinel.next){
        currNode.next = sentinel.next;
    }

    return sentinel.next;
}

console.log('start');
console.log(linkedListToArray(createCycle([1,2,3,4,5])));
//console.log(arrayToLinkedList([]));
//console.log(arrayToLinkedList([1,2,3]));

//Detecting a cycle
//two pointer --> if you see head reference again, you've figure it out as a cycle
//two pointer --> if you see head reference again, you've figure it out as a cycle
/*             *
             |
   1 -> 2 -> 3 -> 
        ^       |
        |________

[node1, node2, node3]
2
previous 3

Set
Slow and Fast Pointer
*/

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
    let curr = head;
    while (curr) {
        if (!set.has(curr)) {
            set.add(curr)
            curr = curr.next;
        } else {
            return true;
        }
    }

    return false;
};


//
//
//work
//call

console.log(detectCycleSet(cycle(list)), "| Expected value is true.");


/*












 |            V                        |
sentinel -> node 1 -> node 2 -> node 3 -> null




const ll = new SingleLLNode(1, new SingleLLNode(2, new SingleLLNode(3, null)));
*/

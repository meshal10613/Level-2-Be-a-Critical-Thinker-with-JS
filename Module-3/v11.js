// Task 1: Implement Queue using Linked List
// Task 2: Implement Stack using Linked List

//* Queue using Linked List
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    };
};

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    };

    enqueue (value) { //? add an item to the first of the linked list
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        };

        this.length ++;
        return this;
    };

    dequeue () { //? remove the first item of the linked list
        if(this.isEmpty()) {
            return undefined;
        };

        const nodeToRemove = this.first;
        if(this.first === this.last) {
            this.last = null;
        };

        this.first = this.first.next;
        this.length --;
        return nodeToRemove.value;
    };

    peek () { //? the first item of the linked list
        return this.first ? this.first.value : undefined;
    };

    isEmpty () { //? check that the linked list is empty or not
        return this.length === 0;
    };

    size () {
        return this.length;
    };

    print () {
        const arr = [];
        let currentNode = this.first;
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        };
        console.log("Front ->", arr.join(" -> "), " -> Back ")
    };
};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
// console.log(queue.peek());
// queue.dequeue()
// console.log(queue.isEmpty())

queue.print();
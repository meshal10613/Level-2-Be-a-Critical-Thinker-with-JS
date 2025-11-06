// Task 2: Implement Stack using Linked List

//* Stack using Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    };

    push (value) { //? add an item in the last to the Linked List
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        };

        this.length ++;
        return this;
    };

    pop () { //? remove the last element from the Linked List
        if(this.isEmpty()) {
            return undefined;
        };

        const nodeToRemove = this.last;
        if(this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            // Find the node before the last one
            let current = this.first;
            while (current.next !== this.last) {
                current = current.next;
            }
            current.next = null;
            this.last = current;
        };

        this.length --;
        return nodeToRemove.value;
    };

    peek () { //? get the last item value from the Linked List
        return this.last ? this.last.value : undefined;
    };

    isEmpty () {
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

const stack = new Stack();

stack.push(8);
stack.push(9);
stack.push(10);
stack.pop()
console.log(stack.peek())
stack.print();
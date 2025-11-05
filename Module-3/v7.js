class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    append (value) { //? add to the last in the linkedlist
        const newNode = new Node(value);
        // If the linkedlist is empty
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the linkedlist is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        };
        this.length ++;
    };

    prepend () { //? add to the first in the linkedlist

    };

    insert () {

    };

    remove () {

    };

    print () {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        };
        console.log(arr.join(" -> "), " -> null ")
    };
};

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print();
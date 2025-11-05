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
        return this;
    };

    prepend (value) { //? add to the first in the linkedlist
        const newNode = new Node(value);
        // If the linkedlist is empty
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the linkedlist is not empty
            newNode.next = this.head;
            this.head = newNode;
        };

        this.length ++;
        return this;
    };

    insert (index, value) {
        if (index < 0 || index > this.length){
            console.error("Index out of bound!");
            return undefined;
        };

        // If insert in in the start of the linkedlist
        if (index === 0) {
            return this.prepend(value);
        };

        // If insert in in the end of the linkedlist
        if (index === this.length) {
            return this.append(value);
        };

        // If insert in in the middle of the linkedlist
        // find the leading node
        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;
        // Create a new node
        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length ++;
    };

    remove () {
        
    };

    _traverseToIndex (index) {
        let count = 0;
        let currentNode = this.head;

        while(count !== index) {
            currentNode = currentNode.next;
            count ++;
        };
        return currentNode;
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

linkedList.prepend(4);
linkedList.insert(1, 5);

linkedList.print();
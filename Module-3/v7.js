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
        let count = 0;
        let leadingNode = this.head;

        while( count !== index ) {
            leadingNode = leadingNode.next;
            count ++;
        };
        console.log(leadingNode)
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

linkedList.prepend(4);
linkedList.insert(1, 5);

linkedList.print();
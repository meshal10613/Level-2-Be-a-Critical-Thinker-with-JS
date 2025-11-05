//* Queue Implementation FIFO(First In First Out)-------------------


//? Queue-- array implementation
class Queue {
    constructor () {
        this.items = [];
    };

    //* O(1)
    enqueue (value) { //? add an item to the first of the array
        this.items.unshift(value);
    };

    //* O(n)
    dequeue (value) { //? remove the first item of the array
        if(this.isEmpty()){
            return undefined;
        };
        return this.items.shift(value);
    };

    //* O(1)
    peek () { //? the first item of the array
        if(this.isEmpty()){
            return undefined;
        };
        return this.items[0];
    };

    //* O(1)
    isEmpty () { //? check that the array is empty or not
        return this.items.length === 0;
    };

    print () {
        console.log(this.items);
    };
};

const queue = new Queue();
console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
console.log("Peek the firs item",queue.peek())
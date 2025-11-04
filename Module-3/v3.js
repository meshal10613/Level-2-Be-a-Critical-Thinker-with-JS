//* Stack Operations LIFO(Last In First Out) -------------
//? push() - add to the last
//? pop() - remove the last
//? peek() - value of the last item

class Stack {
    constructor () {
        this.items = [];
    };

    //* O(1)
    push (value) { //? add an item in the last to the array
        this.items.push(value);
    };

    //* O(1)
    pop (value) { //? remove the last element from the array
        if(this.isEmpty()){
            return undefined;
        };
        return this.items.pop(value);
    };

    //* O(1)
    peek () { //? get the last item value from the array
        if(this.isEmpty()){
            return undefined;
        };
        return this.items[ this.items.length - 1 ];
    };

    //* O(1)
    isEmpty () { //? check that the array is empty or not
        return this.items.length === 0;
    };

    print () {
        console.log(this.items)
    }
};

const stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.peek());
stack.print();
console.log(stack.pop());
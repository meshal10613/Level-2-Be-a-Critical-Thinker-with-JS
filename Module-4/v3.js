// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "J",
// determine if the input string is valid.
// An input string is valid if:
// 		Open brackets must be closed by the same type of brackets.
// 		Open brackets must be closed in the correct order.
// 		Every close bracket has a corresponding open bracket of the same type.


//? Input and Output
//? "(){}[]" -> true
//? "([{}])" -> true
//? "(J" -> false
//? "(()" -> false

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

const bracketChecker = (str) => {
	const stack = new Stack();

	const bracketMap = {
		")" : "(",
		"}" : "{",
		"]" : "["
	};

	for(let i = 0; i < str.length; i++){
		const char = str[i];
		
		if(char === "(" || char === "{" || char === "[") {
			stack.push(char);
		} else if (char === ")" || char === "}" || char === "]") {	
			const expected = bracketMap[char];
			const got = stack.pop();
			// console.log("Expected", expected, "Got", got);

			if (got !== expected) {
				return false;
			} else if(stack.isEmpty()) {
				return false;
			} 
		};
	};

	return stack.isEmpty();
};

// console.log(bracketChecker("(){}[]"));
// console.log(bracketChecker("([{}])"));
// console.log(bracketChecker("(J)"));
// console.log(bracketChecker("(()"));
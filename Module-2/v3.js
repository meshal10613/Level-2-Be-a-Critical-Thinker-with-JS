// Sort---------------------------
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["apple", "Banana", "cherry", "Date"];

numbers.sort((a, b) => a - b); //a - b means accending order | b - a means desending order
fruits.sort((a, b) => a.localeCompare(b)); //for mixed lowercase uppdercase


// Nested array flat------------------------
const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
const flatArr = arr.flat(); //nested array to flat [default max 1 layer will flat]
// if number than that times flat | if Infinity than all nested will be flat

const tagsFromPost = [
    ["JavaScript", "React.js", "CSS3"],
    ["Node.js", "Express.js"],
    ["Html5", "CSS3", "React.js"],
];

const filterTags = [...new Set(tagsFromPost.flat())]; //remove duplicate item, also flat the array and return as an array


// Some---------------------
const num = [1, 2, 3, 4, 5];
const hasEvenNum = num.some(n => n % 2 === 0); //if one element has matched the criteria
// console.log(hasEvenNum)

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];
const canAccess = currentUserRoles.some(role => 
    featureAccessRoles.includes(role)
);
// console.log(canAccess)


// Array.from()-----------------------
const array = Array.from({ length: 5 }, (_, i) => i);
const newA = Array.from([1, 2, 3], (value, i) => value);
// console.log(newA)

const range = (start, stop, step) => 
    Array.from(
        { length: Math.ceil((stop - start) / step) }, 
        (_, i) => start + i * step  
    );

console.log(range(1, 11, 1))
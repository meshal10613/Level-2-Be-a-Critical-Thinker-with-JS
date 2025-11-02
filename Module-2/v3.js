// Sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["apple", "Banana", "cherry", "Date"];

numbers.sort((a, b) => a - b); //a - b means accending order | b - a means desending order
fruits.sort((a, b) => a.localeCompare(b)); //for mixed lowercase uppdercase


// Nested array flat
const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
const flatArr = arr.flat(); //nested array to flat [default max 1 layer will flat]
// if number than that times flat | if Infinity than all nested will be flat

const tagsFromPost = [
    ["JavaScript", "React.js", "CSS3"],
    ["Node.js", "Express.js"],
    ["Html5", "CSS3", "React.js"],
];

const filterTags = [...new Set(tagsFromPost.flat())]; //remove duplicate item, also flat the array and return as an array
console.log(filterTags)


// Some
const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];

// Array.from()
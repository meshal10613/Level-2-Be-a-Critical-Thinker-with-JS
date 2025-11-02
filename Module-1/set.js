// const mezba = { userName: "Mezba" };
// const ratul = { userName: "Ratul" };
// const mina = { userName: "Mina" };

const arr = ["apple", "mango", "banana", "apple"];

// const set = new Set(arr); //set do not accept duplicate data or if any variable add into the set it's remove the duplicate data
// const convertedArr = Array.from(set) //convert the set into an array

// set.add("apple"); //add something in set
// console.log(set.has("tomato")) // check if the data is in the set or not. It returns only Boolean
// set.delete("banana") // delete the data from the set

// set.forEach(v => console.log(v))

// console.log("Set", set)
// console.log("Set Size:",set.size)

// Brute Force-------------------------
const removeDupArr = (arr) => {
    const newArr = [];
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    });

    return newArr;
};

console.log(removeDupArr(arr))
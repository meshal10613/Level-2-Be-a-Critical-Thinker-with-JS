// const startTime = performance.now();
// console.time("task")

const firstArray = [];
const secondArray = [];

for(let i = 0; i < 500000; i++){
    if(i < 250000){
        firstArray.push(i);
    }
    secondArray.push(i)
}

console.log("First Array", firstArray.length)
console.log("Second Array", secondArray.length)

// console.time("map1");
// const firstUserList = firstArray.map(n => ({ userId: n }))
// console.timeEnd("map1");
// console.time("map2");
// const secondUserList = secondArray.map(n => ({ userId: n }))
// console.timeEnd("map2");

const firstTime = performance.now();
const firstUserList = firstArray.map(n => ({ userId: n }))
const firstEndTime = performance.now();
console.log(`First Array took ${firstEndTime - firstTime} ms`);

const secondTime = performance.now();
const secondUserList = secondArray.map(n => ({ userId: n }))
const secondEndTime = performance.now();
console.log(`Second Array took ${secondEndTime - secondTime} ms`)

// const endTime = performance.now();
// console.log(`This code took ${endTime - startTime} ms`)
// console.timeEnd("task")
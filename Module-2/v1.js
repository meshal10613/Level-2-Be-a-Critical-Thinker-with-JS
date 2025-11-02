// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

const courses = [
    [ "Programming Hero", "Level1" ],
    [ "Next Level Web Development", "Level2" ]
]

const map = new Map(courses);

// map.set(course1,{ courseId: "Level1" });
// map.set(course2, { courseId: "Level2" });

// map.clear() //remove all items
// map.size //get the map size
// map.delete(course1) //delete a data from map
// map.has(course1) //check that, this data is in the map or not. return true or false
// map.forEach((value, key) => console.log("Key :", key, "Value :", value))
// [...map.keys()] //return an array of object with the map keys
// [...map.values()] //return an array of object with the map values
// map.entries() //return every single object to an array, like: [keys, values]

console.log(map.entries())
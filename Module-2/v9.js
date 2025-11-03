//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users & a separate array of posts
// You want to create a new array of users where each user obj contains a posts array of their own posts

//? Input
const users = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
    { id: 103, name: "Charlie" },
];

const posts = [
    { id: 1, userId: 102, title: "My first post" },
    { id: 2, userId: 101, title: "React Hooks" },
    { id: 3, userId: 101, title: "Data Structures" },
    { id: 4, userId: 103, title: "CSS is fun" },
    { id: 5, userId: 102, title: "Node.js streams" },
];

const postByUserId = posts.reduce((table, response) => {
    const { userId } = response;
    if(!table[userId]){
        table[userId] = [];
    };

    table[userId].push(response)

    return table
}, {});

const userWithPosts = users.map(user => {
    return {
        ...user,
        posts: postByUserId[user.id] || []
    }
});

// console.log(JSON.stringify(userWithPosts))
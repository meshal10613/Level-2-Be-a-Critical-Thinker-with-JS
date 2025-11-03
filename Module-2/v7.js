//* Grouping & Aggregating Data

// Scenario: Count every survey & group by response

//? Input
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A"
];

//TODO initiate empty object
//TODO Check if the response already exist or not
//TODO If it exists then encriment the count
//TODO If not then initialize it with 1

const count = surveyResponses.reduce((table, response) => {
    // if(table[response]){
    //     table[response] = table[response] + 1;
    // } else {
    //     table[response] = 1;
    // }

    table[response] = (table[response] || 0) + 1;

    return table;
}, {});

console.log(count)


// Scenario: You have a flat array of sales data & you need to group the sales by category
// Calculating the total revenue & the number of item sold for each

const sales = [
    { category: "Electronics", item: "Wireless Mouse", price: 1500, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 300, quantity: 2 },
    { category: "Electronics", item: "Bluetooth Speaker", price: 350, quantity: 1 },
    { category: "Home", item: "Chair", price: 550, quantity: 1 },
]
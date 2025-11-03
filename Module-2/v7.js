// Vedio 7 & 8
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

// console.log(count);


// Scenario: You have a flat array of sales data & you need to group the sales by category
// Calculating the total revenue & the number of item sold for each

const sales = [
    { category: "Electronics", item: "Wireless Mouse", price: 1500, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 300, quantity: 2 },
    { category: "Electronics", item: "Bluetooth Speaker", price: 350, quantity: 1 },
    { category: "Home", item: "Chair", price: 550, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
    { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
];

//TODO Init empty obj
//TODO init obj category
//TODO calculate the revenue

const totalSalesByCategory = sales.reduce((table, sale) => {
    const { category, price, quantity } = sale;

    if(!table[category]){
        table[category] = { totalRevenue: 0, itemsCount: 0 };
    }
    table[category].totalRevenue += price * quantity;
    table[category].itemsCount += quantity;

    return table;
}, {});
console.log(totalSalesByCategory)
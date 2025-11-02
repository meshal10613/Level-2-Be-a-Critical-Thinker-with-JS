//? Input
const rawApiData = [
    {
        id: "p001",
        productName: "Wireless Mouse",
        category: "Electronics",
        price: 22.99,
        rating: 4.3,
        stocks: 120,
    },
    {
        id: "p002",
        productName: "Gaming Keyboard",
        category: "Electronics",
        price: 59.99,
        rating: 4.5,
        stocks: 75,
    },
    {
        id: "p003",
        productName: "Bluetooth Speaker",
        category: "Audio",
        price: 39.49,
        rating: 4.4,
        stocks: 95,
    },
    {
        id: "p004",
        productName: "Smartwatch Pro X",
        category: "Electronics",
        price: 129.99,
        rating: 4.7,
        stocks: 50,
    },
    {
        id: "p005",
        productName: "USB-C Charger 30W",
        category: "Accessories",
        price: 18.75,
        rating: 4.2,
        stocks: 200,
    },
    {
        id: "p006",
        productName: "Noise Cancelling Headphones",
        category: "Audio",
        price: 99.99,
        rating: 4.5,
        stocks: 65,
    },
    {
        id: "p007",
        productName: "Ergonomic Office Chair",
        category: "Furniture",
        price: 189.0,
        rating: 4.8,
        stocks: 30,
    },
    {
        id: "p008",
        productName: "4K LED Monitor 27 inch",
        category: "Electronics",
        price: 249.99,
        rating: 4.6,
        stocks: 40,
    },
    {
        id: "p009",
        productName: "Portable SSD 1TB",
        category: "Storage",
        price: 109.5,
        rating: 4.9,
        stocks: 85,
    },
    {
        id: "p010",
        productName: "Mechanical Pencil Set",
        category: "Stationery",
        price: 9.99,
        rating: 4.1,
        stocks: 300,
    },
];

//? Output => [{name: "4K LED Monitor 27 inch"}, {name: "Smartwatch Pro X"}]

//* Process
//TODO Filter => Electronics
//TODO Sort by => Rating
//TODO Slice => first 3 (top 3)
//TODO Map => transform object shape to { name: "Name" }

const electronicsData = rawApiData
    .filter((f) => f.category === "Electronics")
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map(item => { 
        return { name: item.productName }
    });
console.log(electronicsData)

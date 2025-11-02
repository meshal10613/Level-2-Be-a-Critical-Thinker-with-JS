// Count Subtotal-----------------
const cartItem = [
    { id: "p001", productName: "Wireless Mouse", price: 1500, quantity: 1 },
    { id: "p002", productName: "Gaming Keyboard", price: 2200, quantity: 2 },
    { id: "p003", productName: "Bluetooth Speaker", price: 350, quantity: 1 }
];

const subTotal = cartItem.reduce((sum, item) => { 
    return sum + (item.price * item.quantity);
}, 0);
// console.log(subTotal)

// Find best scorer------------------------
const players = [
    { name: "Jamal Bhuyan", score: 88 },
    { name: "Shekh Morsalin", score: 81 },
    { name: "Rakib Hossain", score: 95 },
    { name: "Topu Barman", score: 91 },
    { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
    if(bestPlayer.score > player.score){
        return bestPlayer;
    }

    return player;
}, players[0]);
// console.log(bestScorer)
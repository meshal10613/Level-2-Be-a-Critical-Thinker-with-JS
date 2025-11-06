//* Stateless vs Statefull
// const counter = (ammount) => {
//     let count = 0;

//     count = count + ammount;
//     return count;
// };

// console.log(counter(3));
// console.log(counter(2));

const counter = {
    count: 0,
    add(ammount) {
        this.count = this.count + ammount;
    },

    print() {
        console.log(console.log(this.count));
    },
};

counter.add(2);
counter.add(3);
counter.print();

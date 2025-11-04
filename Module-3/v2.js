// closer
const createCounter = () => {
    let count = 0;

    return(ammount) => {
        count += ammount;
        return count;
    };
};

const counter = createCounter();
// console.log(counter(2))
// console.log(counter(3))


//Statefull & Reproduceble----------------
class Counter {
    constructor (count) {
        this.count = count;
    };

    add(ammount){
        this.count += ammount;
    };

    print(){
        console.log(this.count)
    }
};

const counter1 = new Counter(0);
counter1.add(2);
counter1.add(3);
counter1.print();

const counter2 = new Counter(0);
counter2.add(20);
counter2.add(30);
counter2.print();

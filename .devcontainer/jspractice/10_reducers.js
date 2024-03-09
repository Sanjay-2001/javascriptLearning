const myNums = [1, 2, 3];

const Total = myNums.reduce(function (acc, curval) {
    console.log(`acc: ${acc} || curval ${curval}`);
    return acc + curval;
}, 1);

console.log(Total)

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0);
console.log(myTotal);

const cart = [
    {
        product: "bat",
        price: 1200
    },
    {
        product: "ball",
        price: 100
    },
    {
        product: "wicket",
        price: 1100
    },
]

const totalBill = cart.reduce((acc,curval)=>acc+curval.price,0);

console.log(totalBill);
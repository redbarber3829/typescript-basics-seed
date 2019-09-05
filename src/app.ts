/* in javascript there are different way of declaring a  function*/ 
//name function

function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

//arrow function

let sumOrderBis = (price: number, quantity: number) =>  {
    return price * quantity;
}
const sum = sumOrderBis(25, 2);

console.log(`Total sum: ${sum}`);


/*--------------------------------------------------------------------------*/
//we can declare a variable of type function and then affect a function
/*--------------------------------------------------------------------------*/

let sumOrderTer : Function;
sumOrderTer = (price: number, quantity: number) =>  {
    return price * quantity;
}
const sumter = sumOrderTer(25, 2);

console.log(`Total sum: ${sumter}`);

/*--------------------------------------------------------------------------*/
//we can be more precise in the type of the function using arrow declaration
/*--------------------------------------------------------------------------*/

let sumOrder4 : (price: number, quantity: number) => number;
sumOrder4 = (price: number, quantity: number) =>  {
    return price * quantity;
}
const sum4 = sumOrder4(25, 2);

console.log(`Total sum: ${sum4}`);

/*-------------------------------------------------------------------*/
let sumOrder5 : (price: number, quantity: number) => number; // variable function declaration
sumOrder5 = (x, y) =>  x * y;
const sum5 = sumOrder5(25, 2);

console.log(`Total sum: ${sum5}`);



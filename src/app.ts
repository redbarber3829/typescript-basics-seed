
/*-----------------------------------------------------------*/
// first solution to assign a default value
// the default value is defined in the function implementation
/*-----------------------------------------------------------*/

let sumOrder: (price: number, quantity?: number) => number;

//variable assignment
sumOrder = (x, y) => {
    const q = y || 1; // if y is not defined we assigned the quantity to 1
    return x * q;  
}

//we want the second parameter of the function to be optional
const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);

/*-----------------------------------------------------------*/
// second solution using the default params in the function definition
/*-----------------------------------------------------------*/

let sumOrderbis: (price: number, quantity?: number) => number;

//variable assignment with a function having a default params
sumOrderbis = (x, y = 1) => {
    return x * y;  
}

//we want the second parameter of the function to be optional
const sumbis = sumOrderbis(25);

console.log(`Total sum: ${sumbis}`);

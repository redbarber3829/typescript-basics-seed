//define a variable of type function 
/*let sumOrder: (price: number, quantity: number) => number;

//variable assignment
sumOrder = (x, y) => x * y;

//we want the second parameter of the function to be optional
const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);*/

/*---------------------------------------------------------------*/
//we specify that a parameter is optional in the function type declaration using ?
/*---------------------------------------------------------------*/

let sumOrder: (price: number, quantity?: number) => number;

//variable assignment
sumOrder = (x, y) => {
    //implement the logic in the function if the parameter quantity is undefined
    if (y){
        return x * y;
    }
    return x;  
}

//we want the second parameter of the function to be optional
const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);

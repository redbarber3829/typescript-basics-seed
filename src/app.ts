/*let pizza; //the variable is declared but not assign -> the type of the variable is any

//that means that we can affect anything to the variable
pizza = {
    name : 'plain Old Pepperoni',
    price :  20
}
*/

/*-------------------------------------------------------------------*/
// we want to specify explicitly the type of the variable when declaring
/*-------------------------------------------------------------------*/

//declaring the variable with an object type
let pizza : { name: string, price: number, foo: string};

//we have an error if we don't affect an object with all property declared in the object type
pizza = {
    name : 'plain Old Pepperoni',
    price :  20
}


/*-------------------------------------------------------------------*/
// full exemple with a function property define in the object
/*-------------------------------------------------------------------*/

let pizza2 : { name: string, price: number, getName(): string} = {
    name : 'plain Old Pepperoni',
    price :  20,
    getName() {
        return this.name;
    }
};
console.log(pizza2.getName());

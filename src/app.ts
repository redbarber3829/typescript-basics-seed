//tuple type allow us to suggest to typescript that an array is made with element of different type

/*let pizza = ['Pepperoni', 20];
//if we look at the implicit type , we can see the type of pizza is (string | number)[]
//that mean that we can affect anything on the array that is a string or a number
pizza = ['Pepperoni', 20, 'bacon', 'potates',10];

*/

/*-----------------------------------------------------------------------------*/
//we want to define a fix structure to the array in order to limit the number of element for array
// in order to avoid to add too many element to the array ['Pepperoni', 20, 'bacon', 'potates',10]
/*-----------------------------------------------------------------------------*/
//the tuple type allow us to say that the first argument must be a string and the second a number
//the third a boolean -> using the tuple type we restrict the number and the type of each element in the structure 
// it's sort of union type inside an array but the tuple force us to respect the order and type of each element
let pizza : [string, number, boolean];
pizza = ['Pepperoni', 20, true];



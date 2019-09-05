const sizes = ['small', 'medium', 'large'];
//when we assing the array to the variable we wan see the implicit type of the variable string[]

/*-------------------------------------------------------------------------*/
//explicit declaration of a string array type
/*-------------------------------------------------------------------------*/

let sizes2: string[];

sizes2 = ['small', 'medium', 'large'];

/*-------------------------------------------------------------------------*/
//explicit declaration of a number array type
/*-------------------------------------------------------------------------*/
let sizes3: number[];

sizes3 = [1, 2, 3];


/*-------------------------------------------------------------------------*/
//use of a generic type
/*-------------------------------------------------------------------------*/
//as we can declare an array using either [] or new Array
//we can use the constructor type Array to use the generic

let toppings: Array<string>;

toppings = ['pepperoni','tomato','bacon'];


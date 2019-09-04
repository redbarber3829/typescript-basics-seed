let implicitCoupon = 'pizza25';
let explicitCoupon: string = 'pizza25';


/*implicit vs explicit  applys to everything functions, variables, classes
typescript has something called the infered types
->depending of the value affected to a variable typescript determine the type of the variable
*/

//explicit type can ease the understanding of the code
//working in a team, it's more easy for every one to develop using explicit type -> act as a documentation

/*------------------------------------------------------------------------------------*/
//implicit type any
/*------------------------------------------------------------------------------------*/


let myVariable;
//when we don't assign a value to a variable, the type is infered as any
//that means that we can affect anything to the variable
myVariable = 'string';
myVariable = 2;

/*------------------------------------------------------------------------------------*/
//implicit type define on the declaration of the variable
/*------------------------------------------------------------------------------------*/


//if assign a variable with a value as we declare the variable then the type can't be change
/*let myNumber = 2;
//here the type myNumber is a number and we can't affect a string after that
myNumber = 'fdfd';*/

/*------------------------------------------------------------------------------------*/

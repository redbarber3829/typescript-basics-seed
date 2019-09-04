// different type in javascript
//new Number();
//15

/*-------------------------------------------------------------------------------*/

// a numbertype in typescript  is different than a number type in javascript
/*let pizzaCost = 10;
pizzaCost = "25"*/
//we can't affect a variable with a different type after its first initialization
// typescript infered the type for us -> here typescript define that the type of the variable
// is a number based on the assignment value

/*-------------------------------------------------------------------------------*/
//we can explicitly define the type of the variable while defining the variable
//let pizzaCost: number = 10;

/*-------------------------------------------------------------------------------*/
//defining function with explicit type of parameter and type of return
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

//while the strict mode is defined in tsconfig file, typescript compiler suggest us
// not to let the affectation made implicitly but encourage us to define the type of the variable explictly
/*function calculatePrice(cost, toppings) {

}*/

/*-------------------------------------------------------------------------------*/
// defining explictly the type of parameter of the function
/*-------------------------------------------------------------------------------*/

//while defining explictly the type of parameter we can see that error disappear
/*function calculatePrice(cost: number, toppings: number) {
  return cost + 1.5 * toppings;
}*/

/*-------------------------------------------------------------------------------*/
// defining explictly the type of return of the function
/*-------------------------------------------------------------------------------*/
function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

/*if we decide to apply a toString on the result we can see that the compiler raise an error
string is not assignable to a number
*/
/*
function calculatePrice(cost: number, toppings: number): number {
  return (cost + 1.5 * toppings).toString();
}
*/

/*-------------------------------------------------------------------------------*/

/*const cost = calculatePrice(pizzaCost, pizzaToppings);*/
//as the function return explicitly a type number
//the variable cost implitly become a number

/*-------------------------------------------------------------------------------*/


//to make it more readable, we can explictly define the type of the variable cost
const cost: number = calculatePrice(pizzaCost, pizzaToppings);
//TYPESCRIPT IMPROVE MAINTENABILITE USING EXPLICIT TYPE DEFINING OPPOSITE TO JAVASCRIPT
//WHERE YOU CAN AFFECT EVERY TYPE TO ANYTHING
//use of ES6 string litteral to log the cost
console.log(`Pizza costs: ${cost}`);


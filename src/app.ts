/* destructuring allow us to affect variables from object or arrays 
allow us to structure things differently -> affect variable from property of an object
*/
const pizza = {
  name:'Pepperoni',
  toppings: ['pepperoni']
};

/*------------------------------------------------------------------------------*/
//           OBJECT DESTRUCTURING
/*------------------------------------------------------------------------------*/

//if we want to affect the value of the proporties of a pizza object name and toppings to variable
//just define a parameter object defining two properties corresponding to the name we want to retriew
/*function order({name, toppings}) {
   console.log(name, toppings);
}
order(pizza);
*/

/*this syntax tell us that the order function will receive an object containing two properties call
naming and toppings
this syntax allow us to create variable
*/
/*------------------------------------------------------------------------------*/

//if we want to rename the name of the variable while destructuring the object
/*function order({name : pizzaName, toppings: pizzaToppings}) {
  console.log(pizzaName, pizzaToppings);
}
// here the order function will receive as parameter an object containing a property name and property toppings
//the value of the two properties will be affected to two variable pizzaName and pizzaToppings


order(pizza);
*/

/*------------------------------------------------------------------------------*/
//we can destructure an object return by function in order to affect a variable containing
//the name of the pizza

function order({name : pizzaName, toppings: pizzaToppings}) {
  return {pizzaName, pizzaToppings};
}

//here the property pizzaName of the object return by the order function will be affected to
// a variable pizzaName -> affect a variable from a property of an object
const {pizzaName} = order(pizza);
console.log(pizzaName);

/*------------------------------------------------------------------------------*/


// the import syntax also correspond to destructuring
// here the module utils export an object containing a property uppercase
// we affect a variable from a property of a module
//import {uppercase} from './utils'



/*------------------------------------------------------------------------------*/
//           ARRAY DESTRUCTURING
/*------------------------------------------------------------------------------*/
const toppings = ['pepperoni', 'bacon', 'chilli'];
//old way to retrieve a value from an array -> retrieve the value based on the index
//const firstItem = toppings[0];

//using the destructuring syntax of the array
const [first, second, third] = toppings;
//here a variable called first will receive the value of the first item of the array, the variable second  the second items of the Array
console.log(first, second, third);

/*------------------------------------------------------------------------------*/
// desctructuring an array pass to a function
/*------------------------------------------------------------------------------*/
function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}
// more than desctructuring we specify here that the array pass to the function contain any type


logToppings(toppings);


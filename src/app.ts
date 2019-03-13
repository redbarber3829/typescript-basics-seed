const pizzas = [{ name: "Pepperoni", toppings: "pepperoni" }];

//classic way of writing a function
/* const mappedPizzas = pizzas.map(function(pizza) {
  return pizza.name.toUpperCase();
});

console.log(mappedPizzas);
 */

//arrow function with a single parameter
const mappedPizzas = pizzas.map(pizza => {
  return pizza.name.toUpperCase();
});

console.log(mappedPizzas);

//arrow function with multiple parameter (parenthesis mandatory)
/*
const mappedPizzas = pizzas.map((pizza, index) => {
    return pizza.name.toUpperCase();
});
console.log(mappedPizzas);
*/

//arrow function with implicit return (no brackets needed: value after the arrow is the return)
//use implicit return syntax when the function return something
/*
const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());
console.log(mappedPizzas);
*/

const pizza = {
  name: "Pepperoni",
  getName: function() {
    console.log(this); //this represent the object calling the function getName (so it's the current object pizza)
  },
  timeoutOldJs: function() {
    const self = this;
    setTimeout(function() {
      //need to use pattern var that here to acces the object caller
      //this represent the object calling the function so it's a king of timeout object not the object pizza
      console.log(self);
    }, 100);
  },
  timeoutWithArrowFunction: function() {
    setTimeout(() => {
      //arrow function doesn't introduce a new scope while classic function does
      //this represent the object calling the function timeoutWithArrowFunction
      console.log(this);
    }, 100);
  },
  //getName2: () => console.log(this.name), //not correct because arrow function doesn't create a new scope
  getName2: () => console.log(pizza.name) //here's the way to access the property name of the object using arrow function
};
pizza.getName();
pizza.timeoutOldJs();
pizza.timeoutWithArrowFunction();
pizza.getName2();

//only use arrow function when you need them
//remember that an arrow function doesn't create a new scope
//becareful when you need to use 'this' inside an arrow function

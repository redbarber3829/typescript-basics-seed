const pizza = {
  name: "Pepperoni",
  price: 15
};

const toppings = ["pepperoni"];

//old way of declaring a new object based on two object
const order = {
  pizza: pizza,
  toppings: toppings
};

//in ES6 or TS this is the corresponding implementation
const orderES6 = { pizza, toppings };
//create a property on an object based on a value of other property (the property name is defined based on the variable name)

console.log(order);
console.log(orderES6);

//this syntax also works in function
function createOrder(pizza, toppings) {
  //return an object with property toppings and pizza
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));

//old way of defining a function property in object
/*const pizzaWithFunctionProperty = {
  name: "Pepperoni",
  price: 15,
  getName: function() {
    return this.name;
  }
};*/

//using object litteral improvement to declare the function : its not necessary to declare the property name
// the property name is created based on the function name
const pizzaWithfunctionProperty = {
  name: "Pepperoni",
  price: 15,
  getName() {
    return this.name;
  }
};

console.log(pizzaWithfunctionProperty.getName());

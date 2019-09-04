const toppings = ['bacon', 'chilli'];
const newToppings = ['pepperoni'];

/*old way of doing 
If we want to merge all toping we would use concat method*/

/*const allToppings = toppings.concat(newToppings);*/

/*new way of merging using the array spead operator
the array spread operator is a kind of reverse of the rest operator
while the rest operator transform a list of argument in a single parameter of type array
the array spread operator tranform the array in a list of argument
*/

const allToppings = [...toppings, ...newToppings];
/* it doesn't keep a reference to the topping and the new toppings
it will create a copy and put all the value in a new array
that means that if you change a value in allTopping, we won't modify
the value in the toppings or new toppings array*/

console.log (allToppings);
/* 
rest is a new syntax that allow us to pass any number of argument to a variable 
*/ 

//we want to do something like this 
/*
function sumAll(arr){
   return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);
*/
/*
imagine we want to pass all the element to sum to the function sumAll
without using an array
const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

old way of doing: define all the necessary argument to the function
function sumAll(numberOne, numberTwo, numberThree)
Its hard to define if the number of argument pass to the function vary 
*/

/*
we can use the rest operator to get all argument as a single value
all the arguments passed to the function is considered as a single argument with rest operator
rest operator allow us to get an array from a list of parameters
*/
/*function sumAll(...arr){
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);*/

/*
if a want to pass a parameter to the function that is not used for the sum
for example the first argument is a message that use for logging, the other arguments
are used for the sum, we just need to add a parameter to the function
*/

function sumAll(message, ...arr){
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello!',1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);

/*be careful: the rest parameter must be the last one'*/

/*
the rest operator is different from the arguments keyword
arguments return an object with several properties: 
each property has a name correspond to the index of argument and a
value corresponding to the value of argument
*/
/*function sumAll(message, ...arr){
  console.log(arguments);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello!',1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);
*/



//the void type doesn't exist in javascript language
//void means there is no type at all

let selectedTopping: string = 'pepperoni';

/*-----------------------------------------------------------------*/
//define a function that doesn't return anything
//the void keyword will be use only a function
/*-----------------------------------------------------------------*/

function selectTopping(topping: string): void {
  selectedTopping = topping;
}
//this not a pure function:
//in a pure function you don't change a value of a function that is define outside the function

selectTopping('bacon');

console.log(selectedTopping);
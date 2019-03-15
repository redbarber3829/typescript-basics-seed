function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 25));

//defining a parameter with a default  value
function multiplyWithDefault(a, b = 25) {
  return a * b;
}

console.log(multiplyWithDefault(5));
//overidding of a defaut parameter
console.log(multiplyWithDefault(5, 35));

/* corresponding classical implementation of a defaut value
function multiplyWithDefault(a, b) {
  if (!b) {
    b = 25;
  }
  return a * b;
}
*/

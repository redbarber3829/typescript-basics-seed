//if we define a type string with an uppercase first letter it refer to the StringConstructor
//it correspond to the jascript type string constructor
/*const coupon: String  = 'pizza25';*/

//to use the typescript string type let the string type lowercase
const coupon: string  = 'pizza25';

/*-----------------------------------------------------------------*/
//defining explictly the type of parameter and the type of return of a function
/*-----------------------------------------------------------------*/

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

/*-----------------------------------------------------------------*/
//the double quote is a valid string syntax
/*-----------------------------------------------------------------*/
//const coupon: string  = "pizza25";

/*-----------------------------------------------------------------*/
//multiline string is a valid string type
/*-----------------------------------------------------------------*/
/*const couponMessage: string = `
  I am a string!
`;*/

/*----------------------------------------------------------------*/
//ES6 string litteral
/*----------------------------------------------------------------*/

const couponMessage: string = `final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);
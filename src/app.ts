//we turn off the option strict in the tsconfig file
/*let coupon : string = 'pizza25';*/

/*function that reset the coupon */
/*function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);

removeCoupon();

console.log(coupon);*/

//there is flag strictNullChecks in the tsconfig file -> if we set it to true
//we have an error -> we can't assign null to a type string
// on the assignment coupon = null in the removeCoupon
// we have the same problem if we set the variable coupon to undefined
// coupon = undefined
// with the flag strictNullChecks  we override typescript default behaviour to be more 
// strict about when a variable be undefined or null

/*-----------------------------------------------------------------------------*/

//we can explicitly define that a variable can be null using  |
// here we define that the variable coupon is type string or null
// we have to be explicit if we want to reassign a variable to null
let coupon : string | null = 'pizza25';

/*function that reset the coupon */
function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);

removeCoupon();

console.log(coupon);


/*-----------------------------------------------------------------------------*/
// it's recommended to avoid any Type -> the code is more robust if you define explictly the type
// we can use it for third party library where we don't know explictly the type of parameter

//let statement allow us to reassign a value

/*---------------------------------------------------------------------------*/
// when you define a variable without assigning it an defining the type
// typescript infered the type as any
/*---------------------------------------------------------------------------*/
let coupon;

/*the any type allow us to assign any particular value to that variable*/
coupon = 25;
coupon = '25';
coupon = true;

/*---------------------------------------------------------------------------*/
//we can define explictly the type any
/*---------------------------------------------------------------------------*/
/*let coupon : any;*/

//we can use the type any for a javascript migration purpose where variable can
//receive different type of value and progressvly change to fully typed program
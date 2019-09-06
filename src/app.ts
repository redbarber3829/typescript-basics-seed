const date = new Date();
//this is an instance methode as we instanciate an object above in order to call the method
date.getFullYear();

const date2 = Date.now();
//this is a static method (we don't instantiate a new Date)


/*----------------------------------------------------------------------*/
//how can we create static properties and methods
/*----------------------------------------------------------------------*/

class Coupon {
    //define a static property
    static allowed  = ['Pepperoni', 'Blazing inferno'];
    //define a static method
    static create(percentage: number){
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));

//static are useful when we define utility libraries
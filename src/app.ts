//the readonly property allow us to only read the property
//can't modify the property
/*class Pizza {
    public toppings: string[] = [];
    
    constructor(public name: string){}

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
console.log(pizza.name);// here we can access the property both on read or on write
console.log(pizza);
*/

/*----------------------------------------------------------------------------------*/
//    if we only want to access the property name on read
/*----------------------------------------------------------------------------------*/

class Pizza {
    public toppings: string[] = [];
    
    constructor(readonly name: string){}

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
console.log(pizza.name);// here we can access the property both on read or on write
pizza.name = 'ABC' //we can't assign a value to a readonly property
// a readonly property can't be modified after its initialisation by the constructor

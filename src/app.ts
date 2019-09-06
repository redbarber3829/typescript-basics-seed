//on javascript, there's no private members by defaut
//using typescript we can have this behaviour
//if we try to access something that we consider as private we will throw an error
//private is something internal in a class that we don't want to access
/*class Pizza {
    
    name: string;//this property is public by default
    toppings: string[] = [];//this property is public by default
    
    constructor(name: string){
        this.name = name;
    }

    //this method is public
    addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza);*/

/*------------------------------------------------------------------------*/
//by defaut, the properties or method attached to a class are public
//this is equivalent to
/*class Pizza {
    public name: string;
    public toppings: string[] = [];
    
    constructor(name: string){
        this.name = name;
    }

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}*/

//if we want the method addTopping to be internal, we 
// need to declare it like this
/*private addTopping(topping: string){
   this.toppings.push(topping);
}*/

/*------------------------------------------------------------------------*/
//we can define a property private and affect it on the constructor using
class Pizza {
    public toppings: string[] = [];
    
    constructor(private name: string){}

    //this method is public
    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
//here we can't access pizza.name

console.log(pizza);

//constructor(private name: string){} 
//
//is equivalent to
//
//private name: string;
//constructor(name: string){
//    this.name = name;
//}

//it also work with a public property
//constructor(public name: string){}


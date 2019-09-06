/*
//if we make the property sizes private in base class Sizes
abstract class Sizes {
    constructor(private sizes: string[]){}

    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes(){
        return this.sizes;
    }

}

class Pizza extends Sizes {
    public toppings: string[] = [];
    
    //here we don't specify the accessibility of the sizes property
    //if we specify it as public in the inherited we have a conflict with
    //the accessibility define in the base class which is more restricted
    constructor(readonly name: string, sizes: string[]){
        super(sizes);
    }

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni',['small', 'medium']);
//here we can't call access to the propery sizes as 
console.log(pizza.sizes);
pizza.addTopping('pepperoni');
console.log(pizza.name);
*/

/*------------------------------------------------------------------------------*/
//the purpose of the protected is to prevent accessing the property on an instance of 
//a class like  this console.log(pizza.sizes);
//but allow us to acces the property inside the inherited class
/*------------------------------------------------------------------------------*/


abstract class Sizes {
    //define the property sizes as protected
    constructor(protected sizes: string[]){}

    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes(){
        return this.sizes;
    }

}

class Pizza extends Sizes {
    public toppings: string[] = [];
    
    constructor(readonly name: string, sizes: string[]){
        super(sizes);
    }

    //add a method that update the sizes property of the base class
    public updateSizes(sizes: string[]){
        //here we need to access the sizes property
        //as long as the property sizes is private, it is only accessible within class 'Sizes'
        //the protected accessibility allow us to access the property in the inherited class
        this.sizes = sizes;
    }

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni',['small', 'medium']);
console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);

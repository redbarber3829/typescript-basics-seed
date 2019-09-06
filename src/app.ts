
class Sizes {
    constructor(public sizes: string[]){}

    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes(){
        return this.sizes;
    }

}

//the pizza class inherit from the Sizes class
class Pizza extends Sizes {
    public toppings: string[] = [];
    
    constructor(readonly name: string, public sizes: string[]){
        //call the constructor of the base class
        super(sizes);
    }

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni',['small', 'medium']);
//inherit the getter from the base class
console.log(pizza.availableSizes);
pizza.addTopping('pepperoni');
console.log(pizza.name);

//when a class extend an other class, it inherit the getter, setter, method
//if the base class has a construtor with parameter you need to call the super class constructor with parameter in the inherited class

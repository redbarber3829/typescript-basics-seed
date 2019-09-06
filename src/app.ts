/* interface allow us to define a structural contract
*/

interface SizesInterface {
    availableSizes: string[]; //with a setter or getter we don't use the funtion call to define, we just use a property definition
}


//we use the keyword 'implements' in order to tell that class Sizes should respect
//the contract define by the interface SizesInterface
abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]){}

    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes(){
        return this.sizes;
    }

}

//the pizzaInterface inherit the SizesInterface
interface PizzaInterface extends SizesInterface {
    readonly name: string; //the property is public -> we are allowed to define a readonly property in the interface
    toppings: string[];
    updateSizes(sizes: string[]) : void; //declare a method on the interface
    addTopping(topping: string) : void;
}

//here we say that Pizza implemnet PizzaInterface
class Pizza extends Sizes implements PizzaInterface {
    public toppings: string[] = [];
    
    constructor(readonly name: string, sizes: string[]){
        super(sizes);
    }

    public updateSizes(sizes: string[]){
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

//Notice when a property is public, we can expose it in the interface
//the property sizes defined in class Sizes is protected -> it can't be exposed 
//in the interface SizesInterface since it s not public (it's the same with private member)
//an interface can inherit from another interface

//the advantage of the interface, if it defines a strict contract that should respect a class
//as long as we make a mistake in the spelling of a property in a class, the ts compiler inform us that
//the class incorrectly implements interface
//it makes the code more robust and prevent us from doing wrong things

/**the purpose here is to avoid to create an instance of a Sizes class 
 * we can use abstract in order to avoid creating a new instance of a classe
 * avoid to call new Sizes(['small']);
*/

//we use the abstract keyword in order to create an abstract class

abstract class Sizes {
    constructor(public sizes: string[]){}

    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes(){
        return this.sizes;
    }

}

class Pizza extends Sizes {
    public toppings: string[] = [];
    
    constructor(readonly name: string, public sizes: string[]){
        super(sizes);
    }

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni',['small', 'medium']);
console.log(pizza.availableSizes);
pizza.addTopping('pepperoni');
console.log(pizza.name);

//we can export the abstract class in order to be used in a different file
//export abstract class Sizes {

 // if we try to instantiate an abstract class  new Sizes(['small']);
 //we have a message telling that we can't instantiate an abstract class
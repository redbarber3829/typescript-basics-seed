//setter and getter allow us to control internally how a property can be set

class Sizes {
    constructor(public sizes: string[]){}

    //setter
    set availableSizes(sizes: string[]){
        //we can implement a custom logic here
        this.sizes = sizes;
    }

    //getter
    get availableSizes(){
        //we can implement a logic here
        return this.sizes; //access an internal property
    }

}

const sizes = new Sizes(['small','medium']);

// invoke getter
console.log(sizes.availableSizes);
// invoke setter
sizes.availableSizes = ['medium', 'large'];

console.log(sizes.availableSizes);

class Pizza {
    public toppings: string[] = [];
    
    constructor(readonly name: string){}

    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
console.log(pizza.name);

//setter an getter are always public
//setter and getter offer flexibility with the possibility to had custom logic while 
//setting a property 
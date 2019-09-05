
interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes  {
    name: string;   
    toppings?: number; //the way to add an optional properties in an interface is like a function optional argument
    getAvailableSizes(): string[];
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]) : Pizza  {
    //here the pizza return don't have a topping property define
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni',['small','medium']);
//the toppings is being defined after the pizza creation
pizza.toppings = 1;


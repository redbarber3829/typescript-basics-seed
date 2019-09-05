
interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes  {
    name: string;   
    toppings?: number; 
    getAvailableSizes(): string[];
    [key: number]: string; //here we add an index signature (the key can be a string or a number)
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]) : Pizza  {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni',['small','medium']);
pizza[1] = 'xyz'; //here we affect the dynamic property
pizza.toppings = 1;

//index signature allow us to define multiple dynamic property with different value

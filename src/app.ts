interface Sizes {
    sizes: string[];
}

//here we say that Pizza inherit from Sizes interface
//pizza inherit the property we define in the sizes interface
interface Pizza extends Sizes  {
    name: string;   
    getAvailableSizes(): string[];
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

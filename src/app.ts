interface Pizza  {
    name: string;
    sizes: string[];
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

/*-----------------------------------------------------------
we can also use the assertion type to let typescript infered the type 
of return

function createPizza(name: string, sizes: string[])  {
    return {
        name,
        sizes,
        getAvailableSizes(){
            return this.sizes;
        }
    } as Pizza;
}
it's problably more readable to define the return type directly in 
the function signature
-----------------------------------------------------------*/

pizza = createPizza('Pepperoni',['small','medium']);


//notice that the function declaration as a custom type is little different than
// a function declaration in an interface
type getAvailableSizes = () => string[];
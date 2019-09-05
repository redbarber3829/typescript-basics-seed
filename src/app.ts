//we will transform a custom type based on an alias to an interface

/*-------------------------------------------------------------------------- */
//using the alias type
/*-------------------------------------------------------------------------- */

/*type Pizza = {
    name: string;
    sizes: string[];
};

let pizza: Pizza;

//here we emulate a creation of a pizza just like would do a server call
function createPizza(name: string, sizes: string[]) {
    return {
        name,
        sizes
    };
}
//we suppose that is a sort of asynchonous request

pizza = createPizza('Pepperoni',['small','medium']);

//we are not sure that the create pizza return a pizza
//we can add a restriction to the function signature by defining the return type
//function createPizza(name: string, sizes: string[]) : Pizza {
//    return {
//        name,
//        sizes
//    };
//}
*/
/*-------------------------------------------------------------------------- */
//interface is the prefered approach while dealing with complex datastructure
//interface define a contract
//interface are more powerful than custom type as we can extend an interface (oject programming)
/*-------------------------------------------------------------------------- */

interface Pizza  {
    name: string;
    sizes: string[];
};

let pizza: Pizza;

//here we emulate a creation of a pizza just like would do a server call
function createPizza(name: string, sizes: string[]) : Pizza {
    return {
        name,
        sizes
    };
}
//we suppose that is a sort of asynchonous request

pizza = createPizza('Pepperoni',['small','medium']);

//interface is a type that allow us to define the structure or shape of a particular object

/*--------------------------------------------------------------------------------*/
//we can combine different interfaces
/*--------------------------------------------------------------------------------*/

interface Pizzas {
    data: Pizza[]
}
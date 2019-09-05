// class are syntaxic sugar to create constructor function and prototype and inheritance

/*-------------------------------------------------------------*/
//old way of doing things create a function constructor and using prototype
/*-------------------------------------------------------------*/
//we turn off strict mode in ts config file
/*function Pizza(name: string){
    this.name = name;
    this.toppings = [];
}

//we can call 
//new Pizza(); // create an instance of the constructor function

//we add a prototype method to the pizza constructor

Pizza.prototype.addTopping = function addTopping(topping: string){
    this.toppings.push(topping);
};

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza);
*/

/*-------------------------------------------------------------*/
//new way of doing things using class
/*-------------------------------------------------------------*/
//we turn on strict mode in ts config file
class Pizza {
    name: string;
    toppings: string[] = [];
    
    constructor(name: string){
        this.name = name;
    }

    addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza);

//the syntax class in typescript is easier to use than plain old javascript using prototype
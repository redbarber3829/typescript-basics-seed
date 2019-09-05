//we define a custom type pizza -> it's an object type
type Pizza = {name: string, toppings: number};
//the assertion type allow to convert  a variable correspond to a specific type

const pizza: Pizza = { name: 'Blazing Inferno', toppings : 5};

// if we don't know the type we are getting back, we can use the assertion type

/*-----------------------------------------------------------------------*/
// we will use the json serialization, deserialization mechanism in order to obfuscate the type
// notice that the getNameFromJSON function return a type any
/*const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj: string){
    return JSON.parse(obj);
}*/

/*-----------------------------------------------------------------------*/
//we want to tell typescript that when we convert a string back to json using
// getNameFromJSON, it is a pizza object
/*
const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj: string) : Pizza{
    return JSON.parse(obj);
}
getNameFromJSON(serialized);
*/

/*----------------------------------------------------------------------*/
//we want to instruct typescript that the type of JSON.parse is not the type any
//but a specific pizza type
//old way of doing
/*----------------------------------------------------------------------*/
/*const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj: string){
    return (<Pizza>JSON.parse(obj)).name;
}
getNameFromJSON(serialized);*/

//typescript is infering that the type return by the function is a string as we return
//the property name of a pizza object ()

/*----------------------------------------------------------------------*/
//we want to instruct typescript that the type of JSON.parse is not the type any
//but a pizza type
//modern way of doing -> becauce the old way is incompatible with jsX
/*----------------------------------------------------------------------*/
const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj: string){
    return (JSON.parse(obj) as Pizza).name;
}
getNameFromJSON(serialized);

//the assertion type allow us to transform an unknow type to a specific type
var foo = {};
(foo as Pizza).name = 'fdfd';


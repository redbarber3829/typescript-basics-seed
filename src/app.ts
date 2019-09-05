//we can assign any kind of type to the type alias
//we use the union type for the type definition of a variable pizzaSize
/*let pizzaSize : 'small' | 'medium' | 'large' = 'small';

const selectSize = (size: 'small' | 'medium' | 'large') => {
    pizzaSize = size;
};

selectSize('small');*/

//above we both protect the pizzaSize variable and the function selectSize in order
//to restrict the element that we can pass to the variable or to the function

/*-------------------------------------------------------------------------------*/
// in order to avoid the repeat of declaration type we can use an alias type
/*-------------------------------------------------------------------------------*/
//the alias type is purely virtual, its not compiled in js code
// here we declare an alias type using the keyword type
//we can assign anything we want to the custom type
// type Size = string;...
// its like a variable that we can use elsewhere in the application
/*type Size = 'small' | 'medium' | 'large';
let pizzaSize : Size;

const selectSize = (size: Size) => {
    pizzaSize = size;
};

selectSize('small');
*/

//we can export this type in order to be use in different file

/*-------------------------------------------------------------------------------*/
// we can assign anything to an alias type -> for example a function type
/*-------------------------------------------------------------------------------*/


type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void
let pizzaSize : Size = 'small';

const selectSize: Callback = (x) => {
    pizzaSize = x;
};

selectSize('small');

//alias type is type custom that we want to use or reuse in the application
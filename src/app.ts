/*--------------------------------------------------------------- */
// string literal type 
/*--------------------------------------------------------------- */
let pizzaSize: string = 'small';

//the literal type allow us to define the authorized value that can be assigned to a string
function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

//here we make a mistake in the spelling
selectSize('meduim');

console.log(`Pizza size: ${pizzaSize}`);


/*--------------------------------------------------------------- */
// number literal type 
/*--------------------------------------------------------------- */
let pizzaSize: number = 1;

//the literal type allow us to define the authorized value that can be assigned to a string
function selectSize(size: 1 | 2 | 3): void {
    pizzaSize = size;
}

//here we make a mistake in the spelling
selectSize(4);

console.log(`Pizza size: ${pizzaSize}`);

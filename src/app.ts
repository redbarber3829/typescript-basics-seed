// the never type is telling typescript compiler that the return value will never occur
function orderError(error: string) : never {
    throw new Error(error);
    // here never going to return a value
}

orderError('Someting went wrong');

//never type can be used to insure that there is no return that there is unreachable code
// as the same idea: the code after while true loop will never be reached
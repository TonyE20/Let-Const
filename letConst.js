// ES5 Global Constants
var PI = 3.14;
//Placed the other 2nd PI in a Function to stop re-declaration.
function otherpi(PI){
PI = 42; // stop me from doing this!
return PI
}

//ES2015 Global Constants
/* Write an ES2015 Version */
const PI = 3.14;
const PI = 5 // Error

Quiz
//What is the difference between var and let?
//"Var" can be re-declared, "Let" cannot.
//"Var" has a Function scope. "Let" has a Function scope but a
//preminent "Block scope."

//What is the difference between var and const?
//"Var" can be re-declared and re-assign. "Const" cannot (it can be re-assign for referenceTYpe)
//"Var" has a Function scope. "Const" has a Function scope but a
//preminent "Block scope."

//What is the difference between let and const?
//"Let" can be re-assign.
//"Const", only ReferenceType can be re-assign.

//What is hoisting?
// for "Var", all the 'variables' are read first, than their 'values.'It 
//can be call before its been defined.
// Therefore, if you console.log a "Var" before i'ts initialization,
// it will console.log(undefined.)
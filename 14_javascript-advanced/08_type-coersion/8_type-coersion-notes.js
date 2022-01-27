// If right and left variables have different types
// One of them will be converted to the same type
// By the Javascript engine

// So type coersion is Javascript engine converting a certain to type to another type

1 == '1' // true

// == operator means compare 2 values and 
// if they have a different type, coerse one to another

1 === '1' // false

/*********************************************/

if (1) { console.log(5); } // returns 5
if (0) { console.log(5); } // returns undefined
// because 1 is coerSed into true and 0 is coersed into false

/*********************************************/

-0 === +0 // true

Object.is(-0, +0); // false

/*********************************************/

NaN === NaN // false

// So, you should probably use triple equals (===) because
// double equals (==) is pain in JavaScript
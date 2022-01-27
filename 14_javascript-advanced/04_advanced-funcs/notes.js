const first = () => {
	const greet = 'hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures : a function ran. the function executed. it's never going to execute again but its going to remember that there are references to those variables so that the child scope always has access to the parent scope

// const newFunc = first(); // first returns second()

// then,
//
// const newFunc = const second() = () => {
// 	alert(greet);
// }

// We need to know greet, fortunately it will remember greet variable.

/***************************************************/

// Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3);    // returns (b) => a * b;
// curriedMultiply(3)(4); // returns 12

const multiplyBy5 = curriedMultiply(5);
// multiplyBy5(5); // returns 25
// multiplyBy5(10); // returns 50
// multiplyBy5(11); // returns 55

/***************************************************/

// Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
// compose(sum, sum)(5);
// const compose = (f, g) => (a) => f(g(a))
// f = sum, g = sum, a = 5; then:
// const compose = (f, g) => (a) => f(g(5))
// const compose = (f, g) => (a) => f(sum(5))
// const compose = (f, g) => (a) => f(6)
// const compose = (f, g) => (a) => sum(6)
// const compose = (f, g) => (a) => 7
// compose(sum, sum)(5); // returns 7

// done : write it as traditional func to understand this fuck
const compose = function composeFunc(f, g) {
	return function inner(a) {
		return f(g(a));
	}
}

/***************************************************/

// Avoiding Side Effects / Functional Purity

// Input 
// |
// V (5, 10)
// Function -> console.log()
//          -> doing something else outside function
//          -> (side effects)
// |
// V return
// |        | 
// V        V
// value or undefined

// avoid side effects and return something : deterministic
// if inputs are the same it always returns the same thing
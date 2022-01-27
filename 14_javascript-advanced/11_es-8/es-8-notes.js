'Turtle'.padStart(10); // adds 10 spaces at the beginning
// "          Turtle"
'Turtle'.padEnd(5); // "Turtle     "

/************************************************************/

// Valid with the comma at the end

const fun = (a, b, c, d,) => {
	console.log(a); // do something
}

fun(1,2,3,4,); 

// Example : practical use is vertical long parameter lists
const lottaParams = (
	there,
	is,
	so,
	many,
	params,
	here,
	oh,
	hell,
	) => {
	// do smth
}

lottaParams(1, 2, 3, 4, 5, 6, 7, 8,);

/**************************************************************/

Object.values
Object.entries

// before those, we had Object.keys (or was it added in ES8? who cares)

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

// because it's not an array, we cant make map etc.

// "Object.keys(obj)." makes it usable as an array
Object.keys(obj).forEach( (key, index) => {
	console.log(key, obj[key]);
});

Object.values(obj).forEach(val => {
	console.log(val);
});

Object.entries(obj).forEach(val => {
	console.log(val);
});

/********************************************************/

// Example
Object.entries(obj).map( val => {
	return val[1] + value[0].replace('username', '');
});

/*******************************************************/

// Async Await


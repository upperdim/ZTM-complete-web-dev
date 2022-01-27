// Advanced arrays

const array = [1, 2, 10, 16];



const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
});

console.log("forEach : ");
console.log(double);

/**************************************************/

// Map

const mapArray = array.map((num) => {
	return num * 2;
});
// const mapArray = array.map(num => num*2);

console.log("map : ");
console.log(mapArray);

/**************************************************/

// Filter

const filterArray = array.filter(num => {
	return num > 5;
});

console.log("filter : ", filterArray);


/**************************************************/

// Reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 5);

// CAREFUL ! We have a second parameter after the function in array.reduce()

// accumulator = storage / battery = something that can store the information inside the body of the function

console.log('reduce', reduceArray);

// const reduceArray = array.reduce((accumulator, num) => {
// 	return accumulator + num;
// }, 0); // returns sum of elements 29

// const reduceArray = array.reduce((accumulator, num) => {
// 	return accumulator + num;
// }, 5); // returns sum of elements + 5 = 34
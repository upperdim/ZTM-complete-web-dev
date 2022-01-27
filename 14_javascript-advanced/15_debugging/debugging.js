const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(a, b) => a.concat(b), []);


// 1
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, b) => accumulator.concat(b), []);

// 2
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => accumulator.concat(array), []);

// 3
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		console.log('array', array);
		console.log('accumulator', accumulator);
		return accumulator.concat(array);
}, []);

// Instead of console.log(), you can use debugger;
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		debugger; // makes JS engine stop and freeze (debugger breakpoint)
		return accumulator.concat(array);
}, []);
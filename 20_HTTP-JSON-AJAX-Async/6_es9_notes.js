// Feature 1: Object spread operator
const animalAges = {
	tiger: 23,
	lion: 5,
	monkey: 2,
	bird: 10
}
// "rest" is whatever name we want
const { tiger, ...rest } = animalAges;
// "rest" will be an object with rest of the animals



// ES6 feature
const array = [1, 2, 3, 4 ,5];
function sum(a, b, c, d, e) {
	return a + b + c + d + e;
}
sum(...array); // returns 15, spreadys the array as parameters as sum(1, 2, 3, 4, 5);



// object spread does the same with objects on ES9 now
// ES9 feature
function objectSpread(p1, p2, p3) {
	console.log(p1);
	console.log(p2);
	console.log(p3);
}
const { tiger, lion, ...rest } = animalAges;
objectSpread(tiger, lion, rest); // 23, 5, {monkey: 2, bird: 10}



// Feature 2:
const urls = [
	'BROKEN_URL',
	'http://swapi.dev/api/people/2',
	'http://swapi.dev/api/people/3',
	'http://swapi.dev/api/people/4'
  ];
Promise.all(urls.map(url => {
	fetch(url).then(people => people.json())
}))
	.then(array => {
		//throw Error;
		console.log('0', array[0]);
		console.log('1', array[1]);
		console.log('2', array[2]);
		console.log('3', array[3]);
	})
	.catch((err) =>
		console.log('errooooor', err)
	).finally(() => 
		// finally() calls a piece of code no matter what
		// sending a feedback email whether something is successful or not, or showinga notification for example
		console.log('finally...')
	);



// Feature: for await of
// Old way
const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
];  
const getData = async function () {
	const [users, posts, albums] = await Promise.all(
		urls.map(async function getData(url) {
		const response = await fetch(url);
		const data = response.json();
		return data;
		})
	);
	console.log("users", users);
	console.log("posta", posts);
	console.log("albums", albums);
};
getData();
// New feature
// Remark: for of loop:
const loopThroughURLs = url => {
	for (url of urls) {
		console.log(url);
	}
}
// Actual new feature
const getData2 = async function () {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log(data);
	}
};
getData2();
// garbage and 329853982 ways of doing the same thing to be honest... trash...
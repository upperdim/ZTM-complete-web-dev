// Old, promises
fetch('https://jsonplaceholder.typicode.com/users')
	.then(resp => resp.json())
	.then(console.log);
// New, async await syntactic sugar
async function fetchUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json(); // .json() returns a promise
	console.log(data);
};
fetchUsers(); // call the function


// // Old
// const urls = [
// 	'https://jsonplaceholder.typicode.com/users',
// 	'https://jsonplaceholder.typicode.com/posts',
// 	'https://jsonplaceholder.typicode.com/albums'
// ];
// Promise.all(urls.map(url => {
// 	return fetch(url).then(resp => resp.json());
// })).then(results => {
// 	console.log(results[0]);
// 	console.log(results[1]);
// 	console.log(results[2]);
// });
// // New
// const getData = async function() {
// 	// ES6 destructuring
// 	const [ users, posts, albums ] = await Promise.all(urls.map(url =>
// 		fetch(url).then(resp => resp.json())
// 	));
// 	console.log(users);
// 	console.log(posts);
// 	console.log(albums);
// };
// getData();


// Old
const urls = [
	'MISSPELLED_URL_FAIL_PROMISE_ON_PURPOSE',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
];
Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json());
})).then(results => {
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
}).catch('oops');
// New
const getData = async function() {
	try {
		// ES6 destructuring
		const [ users, posts, albums ] = await Promise.all(urls.map(url =>
			fetch(url).then(resp => resp.json())
		));
		console.log(users);
		console.log(posts);
		console.log(albums);
	} catch(err) {
		console.log('oops', err);
	}
};
getData();

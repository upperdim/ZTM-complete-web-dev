// IMPORTANT: Following code may fail to run on the browser. Open a new tab and go to "about:blank" URL before running them on F12.


const pms = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuff worked');
	} else {
		reject('Error, it broke.');
	}
})


// pms.then(result => console.log(result));


// pms;


// Promise chaining
// pms
// 	.then(result => result + '!')
// 	.then(result2 => console.log(result2));


// Let's inspect errors in promises
// pms
// 	.then(result => result + '!')
// 	.then(result2 => {
// 		throw Error;
// 		console.log(result2)
// 	});


// pms
// 	.then(result => result + '!')
// 	.then(result2 => {
// 		throw Error;
// 		console.log(result2)
// 	})
// 	.catch(() => console.log('error catched!'));


// If we move the error above, it will still catct the error
// catch() will catch any errors happened in the .then() chains
// pms
// 	.then(result => {
// 		throw Error;
// 		result + '!'
// 	})
// 	.then(result2 => console.log(result2))
// 	.catch(() => console.log('error catched!'));


// pms
// 	.then(result => result + '!')
// 	.then(result2 => result2 + '?')
// 	.catch(() => console.log('error catched!'))
// 	.then(result3 => {
// 		console.log(result3 + '!')
// 	});


// Below chunk has to be run as whole. Otherwise if we run a variable seperately,
// it will instantly start running and counter will already run out, promise will be resolved.
// At the end, when doing `Promise.all`, they will get printed instantly. Because all of them was resolved.
// const pms2 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 100, 'HIII'); // call "resolve" with 'HIII'` after 100 ms
// });
// const pms3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'POOKIE');
// });
// const pms4 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 3000, 'Is is me you are looking for');
// });
// // Wait multiple promises with this method
// Promise.all([pms, pms2, pms3, pms4])
// 	// Returns results in an array of same order
// 	.then(values => {
// 		console.log(values); 
// 	});


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


const urls = [
	'https://MISSPELLED_AND_FAILED_THIS_FETCH',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
];
Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json());
})).then(results => {
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
}).catch(() => console.log('error'));

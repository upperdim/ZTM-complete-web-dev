// Up until now we could have 3 promise types: pending, rejected and fulfilled (reoslved)
// ES6 added Promise.all([promiseOne, promiseTwo])
const promiseOne = new Promise((resolve, reject) => 
	setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => 
	setTimeout(reject, 3000));
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));
// Uncaught (in promise) undefined, because .all() has to have all promises resolved inside
// In order to get it running, we need to have a .catch at the end
const promiseOne = new Promise((resolve, reject) => 
	setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => 
	setTimeout(reject, 3000));
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
	.catch(err => console.log('something failed', err));



// New ES2020 feature: Promise.allSettled()
const promiseOne = new Promise((resolve, reject) => 
	setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => 
	setTimeout(reject, 3000));
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
	.catch(err => console.log('something failed', err));

// .all() short circuits if any of the Promises are rejected
// .allSettled() doesn't care about state, it just cares if none of them are 'pending' anymore

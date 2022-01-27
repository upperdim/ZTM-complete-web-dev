const basket = ['apples', 'ranges', 'grapes'];

// Previously :

// for
for (let i = 0; i < basket.length; ++i) {
	console.log(basket[i]);
}

// forEach
basket.forEach(item => console.log(item));

/*****************************************************/

// *** Iterating : arrays, strings

/*****************************************************/

// for of

for (item of basket) {

	console.log(item);

}

/*****************************************************/

// *** Enumerating : objects

const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

// for in

for (item in detailedBasket) {

	console.log(item);

}
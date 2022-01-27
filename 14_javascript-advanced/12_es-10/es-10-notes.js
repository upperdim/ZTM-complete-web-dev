const arr = [1, [2, 3], [4, 5]];
arr.flat(); // [1, 2, 3, 4, 5]

const arr2 = [1, 2, [3, 4, [5]]];
arr2.flat(); // [1, 2, 3, 4, Array(1)];

const arr3 = [1, 2, [3, 4, [5]]];
arr3.flat(2); // default was (1)
              // [1, 2, 3, 4, 5]

const entries = ['bob', 'sally',,,,,,, 'cindy'];
entries.flat(); // ['bob, 'sally', 'cindy']

/*************************************************/

.flatMap()

/*************************************************/

const userEmail = '  eddyeagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail.com        ';

// Removes spaces
userEmail.trimStart();
userEmail.trimEnd();

/*************************************************/

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

Object.fromEntries(userProfiles);
// {commanderTom: 23, derekZlander: 40, hansel: 18}

const obj = Object.fromEntries(userProfiles);
Object.entries(obj); // gets userProfiles array back!

/**************************************************/


try {
	// Run this code, if there is an error here,
	4 + 5;
} catch {
	// Run here
	console.log('you messed up');
}

// ---------------------

try {
	my_undefined_var + 'hi';
} catch (error) {
	console.log('you messed up ' + error);
}

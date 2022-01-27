// ES2020!

// BigInt
// Nullish Coalescing operator ( ?? )
// Optional Chaining operator ( ?. )

// Promise.allSettled // will be discussed later
// globalThis // will be discussed later 

/****************************************************/

// BigInt

typeof 4; // "number"
typeof true; // "boolean"
typeof 382592589285989239852; // "bigint"
typeof 1n; // "bigint"

// MAX_SAFE_INTEGER

Number.MAX_SAFE_INTEGER; // around 9007199254740992

1n + 2n; // 3n (bigint)

/****************************************************/

// Optional Chaining Operator

let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6
	}
}

let weight = will_pokemon.pikachu.weight;
console.log('weight: ', weight);

let andrei_pokemon = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30
	}
}

// below will give error, andrei doesn't have pikachu
let weight2 = andrei_pokemon.pikachu.weight; 
console.log('weight: ', weight);

// Coded bases will have checks like this
if (andrei_pokemon && andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
	let weight2 = andrei_pokemon.pikachu.weight;
	console.log(weight2);
} else {
	let weight2 = undefined;
	console.log(weight2);
}
// but its annoying

// means is there an object? is there an object?
let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);

/****************************************************/

// Nullish Coalescing Operator

let andrei_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: 'lightning'
	}
}

// now we are at the end of the chain
// if it has power it will short circuit from left of the operator
// if not, it will choose 'no power' string
// however if its null or undefined, it will say 'no power' too
let power = andrei_pokemon?.pikachu?.power || 'no power';
console.log(power);

// if our pokemon doesnt have power yet but we dont necessarily want to say 'no power'
// we should accept null and undefined (power: '') as valid too
let power2 = andrei_pokemon?.pikachu?.power ?? 'no power';
console.log(power2);
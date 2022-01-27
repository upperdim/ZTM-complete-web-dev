// EcmaScript = JavaScript

// 'let' vs 'var' scopes

const player = 'bobby'; // const doesn't change

let exp = 100;

let skilled1 = false;
var skilled2 = false;

if (exp > 50) {
	let skilled1 = true;
	var skilled2 = true;
}

// let skilled1 doesn't change because
// it can create its own scope inside if(){}
// so it didnt modify global variable
console.log(skilled1); 

// var skilled2 changes because 
// it can create its own scope only in functions
// therefore expression inside if(){} edited the
// global variable itself
console.log(skilled2);

/***********************************************************/

// Const objects

const obj1 = {
	player: 'bobby',
	exp: 100,
	skilled: false
}

// you can still change the properties
// obj1.skilled = true; for example
// but you cant assign it to a variable
// obj1 = 5; is invalid for example

/***********************************************************/

// Destructing

const obj1 = {
	player: 'bobby',
	exp: 100,
	skilled: false
}

const player = obj1.player;
const exp = obj1.exp;
let skilled = obj1.skilled;

// Instead, you can do
const { player, exp } = obj1;
let { skilled } = obj1;

/***********************************************************/

// Object properties


// Dynamic object property names
const name = 'john snow';


// Property name between brackets can be determined in runtime below
// Apart from it, there is nothing special about the brackets
const obj = {
	[name]: 'hello',
	['ray' + 'smith']: 'hihi',
	[1 + 2]: 'another property name'
}

/***********************************************************/

const a = 'Simon';
const b = true;
const c = {};

const obj = {
	a: a,
	b: b,
	c: c
}

// Instead, you can do
const obj = {
	a,
	b,
	c
}

/***********************************************************/

// Template strings

const name = 'Sally';
const age = 34;
const pet = 'horse';

// Frustrating
const greeting = 'Hello ' + name + ' you seem to be doing ' + greeting + '!';

const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`;

/***********************************************************/

// Default arguments

function greet(name='', age=30, pet='cat') {
	return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`;
}

/***********************************************************/

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// In the console:
//  > sym1
// << Symbol()

//  > sym2
// << Symbol(foo)

//  > sym3
// << Symbol(foo)

//  > sym2 === sym3
// << false

/***********************************************************/

// Arrow functions

function add1(a, b) {
	return a + b;
}

const add2 = (a,b) => {
	return a + b;
}

const add3 = (a, b) => a + b;
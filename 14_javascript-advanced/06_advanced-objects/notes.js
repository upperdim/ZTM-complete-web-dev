// Advanced Objects
// ------------------------

// Reference type

[] === []; // false
[1] === [1]; // false
// because they are different objects even though the values are the same

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // false

object1.value = 3;
object2.value; // returns 3 because they are assigned to reference the same object instance

// primitive type vs. reference type
// reference type is not supported by the programming language
// it is defined by the programmer

// see advobj.jpg in the folder

/*****************************************************/

// Context vs. Scope

function b() {
	let a = 4;
}

console.log(a); // error, out of scope

// context is where you are (what object are we in - as long as i understood) at the time of running that instruction
console.log(this); // returns window because we are outside of everything
console.log(this === window); // true

this.alert('hello'); 
window.alert('hello');
// this gives left of the .


// ----------------------------

function a() {
	console.log(this); // returns window
}
// window.a();

// -----------------------------

const myobject = {
	a: function() {
		console.log(this);
	}
}

// Run it
myobject.a(); // returns {a: f}

/*****************************************************/

// Instantiation

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this); // to show / debug
	}

	play() {
		console.log(`WEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');


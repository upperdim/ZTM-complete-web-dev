//Evaluate these:
//#1
[2] === [2] // false
{} === {}  // false
// different objects, same content

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

// object1 = 4
// object2 = 4
// object3 = 4
// object4 = 5

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class animal {
	constructor(name) {
		this.name = name;
	}
}

class mamal extends animal {
	constructor(name, type, color) {
		super(name);
		this.type = type;
		this.color = color;
	}

	sound() {
		console.log(`Moo! I'm ${this.name}. I'm a ${this.color} ${this.type}.`);
	}
}

const cow = new mamal('Saban', 'cow', 'white');
cow.sound(); // prints "Moo! I'm Saban. I'm a white cow."
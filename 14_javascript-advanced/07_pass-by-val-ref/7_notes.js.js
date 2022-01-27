// Primitive types have their own references

// primitive type <----> a
// primitive type <----> b


// Objects can refer to the same type

//        <----> a
// object 
//        <----> b


/*******************************************/

var a = 5;
var b = a;

b++;

console.log(a); // 5, didnt change
console.log(b); // 6
// primitive types have their own objects



let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1); // {name: "Yao", password: "easypeasy"}
console.log(obj2); // {name: "Yao", password: "easypeasy"}
// they both changed because we modified the one single same object that both obj1 and obj2 refer to

/*******************************************/

// ARRAYS ARE ALSO OBJECTS

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(123213);

console.log(d); // [1, 2, 3, 4, 5, 123123]
console.log(c); // [1, 2, 3, 4, 5, 123123]
// they both change because arrays are objects
// it is pass by reference

/*******************************************/

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(123213);

console.log(d); // [1, 2, 3, 4, 5, 123123]
console.log(c); // [1, 2, 3, 4, 5]

/*******************************************/

let obj = {a: 'a', b: 'b', c: 'c'};

let obj2 = obj; // same object

// Object.assign({}, <source>);
let clone = Object.assign({}, obj);
let clone2 = {...obj}; // same as above, clones

obj.c = 5;
console.log(clone); // cloned object is not affected by above assignment because they're different objects now
console.log(clone2); // not modified either
console.log(obj); // modofied

/*******************************************/

let obj = {
	a: 'a', 
	b: 'b', 
	c: {
		deep: 'try and copy me'
	}
}

// Let's try the same things as above first
let clone = Object.assign({}, obj);
let clone2 = {...obj}; 

obj.c = 5;
console.log(clone); 
console.log(clone2); 
console.log(obj); 

// Everything is the same
//-----------------------------------------
// So lets try to change "deep"  now
let obj = {
	a: 'a', 
	b: 'b', 
	c: {
		deep: 'try and copy me'
	}
}

// Let's try the same things as above first
let clone = Object.assign({}, obj);
let clone2 = {...obj}; 

obj.c.d = 'hahaha';
console.log(clone); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone2); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(obj); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }

// Above was a shallow clone. It clones everything inside the outer object at the first level.
// However at the first level, there was another object.
// It simply copied the reference of the deep object.

/*******************************************/

let obj = {
	a: 'a', 
	b: 'b', 
	c: {
		deep: 'try and copy me'
	}
}

// Let's try the same things as above first
let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.d = 'hahaha';
console.log(clone); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone2); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(obj); // { a: 'a', b: 'b', c: { deep: 'hahaha' } }

console.log(superClone); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// If the object we want to clone is very deep, this method will be so slow. This is just for the demonstration of shallow and deep cloning. You should probably use some other ways to copy very deep objects.
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(7);
rabbit = rabbit.padStart(7);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); // Pads with character provided in the 2nd param


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let str = '';
Object.entries(obj).map( val => {
	str = str.concat(val[0]);
	str = str.concat(' ');
	str = str.concat(val[1]);
	str = str.concat(' ');
});

str;

/***************************************/

// Instructors solution

Object.entries(obj).map(val => val.join(" ")).join(' ');
// wtf, we haven't seen .join() anyway
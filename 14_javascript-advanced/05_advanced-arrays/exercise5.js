// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newarr = [];
array.forEach(f = (item) => {
  let uname = item.username;
  uname = uname + "!";
  newarr.push(uname);
});
console.log(newarr);

const newarr = [];
array.forEach(f = (item) => newarr.push(item.username + "!"));
console.log(newarr);

const newarr = [];
array.forEach(item => newarr.push(item.username + "!"));
console.log(newarr);

// Not forEach() method
const newarr2 = [];
for (let i = 0; i < array.length; ++i) {
  newarr2.push(array[i].username + "!");
}
console.log(newarr2);

const newarr3 = [];
for (const element of array) {
  newarr3.pus(element.username + "!");
}
console.log(newarr3);

// CAREFUL ! 
// for () { } is a proper loop
// forEach() is a method of array class
// arr.forEach( /* you have to do everything here */ );

//Create an array using map that has all the usernames with a "? to each of the usernames
const maparr = array.map(item => item.username + "?");
console.log(maparr);

//Filter the array to only include users who are on team: red
const filtarr = array.filter(item => item.team === 'red');
console.log(filtarr);

//Find out the total score of all users using reduce
const total = array.reduce( (accumulator, item) => {
  return accumulator + item.score;
}, 0);
console.log(total);

const total2 = array.reduce( (acc, item) => acc+item.score, 0);
console.log(total2);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// my soln.
const myarr = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

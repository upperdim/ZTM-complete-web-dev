// You can see the solution files by other students here -> https://github.com/zero-to-mastery/Coding_Challenge-6

/*******************************************************************/

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// This solution originally had NO comments :p

function mySort(arr) {
	// Bubble sort :p
	for (let i = 0; i < arr.length; ++i) {
		for (let j = 0; j < arr.length; ++j) {
			if (arr[j+1] < arr[j]) {
				let tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}

	// Array is sorted

	let howManySame = 0; // how many times this element has repeated in a row
	let last = null;
	const result = [];
	// Iterate over elements
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] === last) {
			// Current element is same as the last one 

			++howManySame; // current element repeated
			continue; // go to the next element
		} else {
			// Current element is different than the last one

			if (howManySame > 1) {
				// We have multiple same elements, we have to group them into an array
				const group = [];
				for (let j = 0; j < howManySame; ++j) {
					group.push(last); 
				}

				result.push(group);
			} else {
				// It's a single element
				if (last === null) { continue; } // 1st iteration <MARK>
				result.push(last); 
			}

			last = arr[i];
			howManySame = 1;
		}
	}

	return result;
}

// <MARK> could be avoided by initializing howManySame = 1, last = arr[0] and for (let i = 1...)

/*******************************************************************/

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const myarr = [1, 2, 3];
let t = 4;

function answer(arr, targetNum) {
	for (let i = 0; i < arr.length; ++i) {
		for (let j = 0; j < arr.length; ++j) {
			if (arr[i] + arr[j] === targetNum) {
				const ans = [];
				ans.push(arr[i]);
				ans.push(arr[j]);
				return ans; // my answer returns a single case which is the first case
			}
		}
	}
}

console.log(answer(myarr, t));

/*******************************************************************/

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function ans(str) {

}

// '123, 234, 24'
// '12,255,10'
function isRGB(str) {

}

function isHex(str) {

}

function hexToRGB(hexstr) {

}

function RGBtoHex(rgbstr) {

}


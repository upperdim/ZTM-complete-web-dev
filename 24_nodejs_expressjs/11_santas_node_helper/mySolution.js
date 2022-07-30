const fs = require('fs')


// Question 1 - What floor does Santa end up on?
// Question 2 - When does Santa first enter the basement?
const fileContent = (fs.readFileSync('puzzle_input.txt')).toString()

console.time('timer')

let currPos = 0
let enteredBasement = false
let q2answer = null

for (let i = 0; i < fileContent.length; ++i) {
	if (fileContent[i] === ')') 
		--currPos
	else 
		++currPos

	if (!enteredBasement && currPos < 0) {
		q2answer = i + 1
		enteredBasement = true
	}
}

console.timeEnd('timer')

console.log(currPos)
console.log(q2answer)


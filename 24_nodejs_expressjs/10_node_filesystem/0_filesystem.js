const fs = require('fs')

// Read
fs.readFile('hello.txt', (err, data) => {
	if (err) {
		console.log(err)
	}
	// if no encoding is specified, then the raw buffer is returned
	// `data` prints bytes. we need `data.toString()`
	// `.toString()` uses utf8
	console.log('Async:', data.toString()) 
	// You can still externally speciy encoding though
	// console.log(data.toString('utf8)) 
})

// `readFile` is actually asynchronous. That's also why it accepts a callback function.
// It will start its operation whenever its called and return the results when its finished.
//
// This function however, is synchronous.
const file = fs.readFileSync('hello.txt')
console.log('Sync:', file.toString())

// For a server, asynchronous file read makes more sense.
// Because when we will be reading a file, especially a bigger one,
// execution and all other operations will wait for it



// Append
fs.appendFile('./hello.txt', ' This is so cool.', err => {
	if (err) {
		console.log(err)
	}
})


// Write
fs.writeFile('bye.txt', 'Sad to see you go', err => {
	if (err) {
		console.log(err)
	}
})

// Delete
fs.unlink('deletMe.txt', err =>{
	if (err) {
		console.log(err)
	}
})
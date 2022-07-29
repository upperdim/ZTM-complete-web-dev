// doesn't work
// (node:1488) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// import num from './script2.js' // "ES module" syntax



// This works, because node had to implement importing and modules
// before it was even inside Javascript
// 
// This is called "CommonJS" module
// `import` syntax was later added to Javascript, known as "ES module"
//
// Returns the exported object
const script2 = require('./script2.js')
// Older codebases will have this syntax. 
// Also, this will be backwards compatible and will run on older node versions too.

const a = 5
const b = script2.num

console.log(a + b)
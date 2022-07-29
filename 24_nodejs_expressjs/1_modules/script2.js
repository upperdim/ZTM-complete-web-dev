const number = 1337

// doesn't work
// (node:1488) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
//export default num



// This works, node implemented `modules` and exporting before Javascript even had them inside the language
//
// Exports this object
module.exports = {
	num: number
}
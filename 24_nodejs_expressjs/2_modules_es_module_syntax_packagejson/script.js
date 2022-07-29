// (node:18048) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
//(Use `node --trace-warnings ...` to show where the warning was created)
//
// 
//
// Have to either have a "package.json" with `"type": "module"` in it,
// or have the file extensions as ".mjs", stands for module javascript
import { num } from './script2.js' // "ES module" syntax + destructuring
// import num from './script2.mjs' // won't work either, need `export default` for this

const a = 5
const b = num

console.log(a + b)
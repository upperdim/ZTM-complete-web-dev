console.time('label') // start timer on the first call

for (let i = 0; i < 1000000; ++i)
	/* do nothing */;

console.timeEnd('label') // end timer with the same label
// Automatically prints elapsed time

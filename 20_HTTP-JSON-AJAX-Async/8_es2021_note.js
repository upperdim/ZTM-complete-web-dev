// There is a new method added to promises in 2021! Unfortunately it isn't a very useful one, but I added here for you as an example that you can play around with using our previous example:

// Promise.any() resolves if any of the supplied promises is resolved. Below we have 3 promises, which resolves at random times.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
});
// Out of p1, p2 and p3, whichever resolves first is taken by Promise.any().

(async function () {
  const result = await Promise.any([p1, p2, p3]);
  console.log(result); // Prints "A", "B" or "C"
})();
// What if none of the promises resolve? In that case Promise.any() throws an error!
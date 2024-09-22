console.log(global); // 还有些不可枚举的变量
// Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   navigator: [Getter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }

console.log(__filename);
console.log(__dirname);

// 1 true
// 2 false
// 3 true
// 4 true
console.log(1, globalThis === global); // true
console.log(2, this === global); // false
(function () {
  console.log(3, this === global); // true
})();
function test() {
  console.log(4, this === global); // true
}
test();

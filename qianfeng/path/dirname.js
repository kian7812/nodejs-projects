const { dirname } = require("path");

console.log(dirname('a/b/c')); // a/b
console.log(dirname('a/b/c/d.txt')); // a/b/c
const { extname } = require("path");

console.log(extname('abc.txt')); // .txt
console.log(extname('abc.txt.exe')); // .exe

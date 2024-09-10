const { parse } = require("path");

console.log(parse('a/b/c.txt')); // { root: '', dir: 'a/b', base: 'c.txt', ext: '.txt', name: 'c' }
console.log(parse('/a/b/c.txt')); // { root: '/', dir: 'a/b', base: 'c.txt', ext: '.txt', name: 'c' }
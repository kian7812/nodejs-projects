
const { join } = require('path');

console.log(join('a', 'b', '/c', '//d')); // a/b/c/d
console.log(join('a', '/b', '../c', '/d')); // a/c/d
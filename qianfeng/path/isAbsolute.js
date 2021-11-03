const { isAbsolute } = require('path');

console.log(isAbsolute('./a/b/c'));
console.log(isAbsolute('/a/b/c'));
console.log(isAbsolute('a/b/c'));
// false;
// true;
// false;
const path = require('path');

const pathStr = path.normalize('a/b//c\\d');

console.log('pathStr', pathStr); // pathStr a/b/c\d 不行

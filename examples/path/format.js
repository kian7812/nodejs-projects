const { format } = require("path");

console.log(format({
    root: '/',
    dir: '/a/b',
    base: 'c.txt',
    ext: '.exe',
    name: 'd'
}));

// /a/b/c.txt
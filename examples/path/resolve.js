const { resolve } = require('path');

console.log(resolve('a/b/c')); // /Users/yangxueqian/CODE/learn/learn-nodejs/a/b/c
console.log(resolve('a/b/c', 'd//e')); // 绝对路径 /Users/yangxueqian/CODE/learn/learn-nodejs/a/b/c/d/e
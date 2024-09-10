const { readFileSync } = require("fs");


console.log(readFileSync('qianfeng/fs/abc.txt').toString()); // 读取文件的路径，要与执行命令的目录，是相对路径关系
// ➜  learn - nodejs git: (master) ✗ node qianfeng/fs/index.js // 执行命令的当前目录与要被执行的文件，得用相对路径关系
// hello node;
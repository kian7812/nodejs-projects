const { readFileSync, readFile } = require("fs");

readFile('qianfeng/fs/abc.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }

    console.log('异步读取', data.toString());
});

console.log('同步读取', readFileSync('qianfeng/fs/abc.txt').toString());

// ➜  learn - nodejs git: (master) ✗ node qianfeng / fs / readFile.js
// 同步读取 hello node
// 异步读取 hello node;
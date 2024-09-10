const { writeFile, writeFileSync } = require("fs");

writeFileSync('qianfeng/fs/abc.txt', '我是writeFileSync写入的');

console.log('start');

writeFile('qianfeng/fs/abc.txt', '我是writeFile写入的', (err) => {
    if (err) return console.error(err);

    console.log('异步写入完成');
});

console.log('end');

// ➜  learn - nodejs git: (master) ✗ node qianfeng / fs / writeFile.js;
// start;
// end;
// 异步写入完成;
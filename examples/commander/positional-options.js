#!/usr/bin/env node

// 引入 Commander.js 库中的 Command 类
const { Command } = require('commander');
// 创建一个新的命令程序实例
const program = new Command();

// 启用位置选项功能，允许选项出现在位置参数之前
// 添加全局选项 -p 或 --progress，用于显示进度信息
program.enablePositionalOptions().option('-p, --progress');

// 定义 upload 子命令，接受一个必需的文件参数 <file>
program
  .command('upload <file>')
  // 为 upload 命令添加本地选项 -p 或 --port，接受数字参数，默认值为 80
  .option('-p, --port <number>', 'port number', 80)
  // 定义命令执行时的回调函数，接收文件参数和选项对象
  .action((file, options) => {
    // 如果设置了全局的 progress 选项，显示开始上传信息
    if (program.opts().progress) console.log('Starting upload...');
    // 显示上传信息，包括文件名和端口号
    console.log(`Uploading ${file} to port ${options.port}`);
    // 如果设置了全局的 progress 选项，显示完成上传信息
    if (program.opts().progress) console.log('Finished upload');
  });

// 解析命令行参数并执行相应的命令
program.parse();

// 尝试以下命令示例：
//    node positional-options.js upload test.js          // 基本用法：上传 test.js 文件到默认端口 80
//    node positional-options.js -p upload test.js       // 使用全局进度选项：显示上传进度信息
//    node positional-options.js upload -p 8080 test.js  // 使用本地端口选项：上传到端口 8080
//    node positional-options.js -p upload -p 8080 test.js // 同时使用全局和本地选项

// 默认情况下，程序的选项在子命令前后均可被识别。如要只允许选项出现在子命令之前，可以使用.enablePositionalOptions()。
#!/usr/bin/env node

// 这个示例用于演示 commander 库中 action 处理器的用法
// 展示了如何在 README 文档中使用 action 处理器

// 导入 commander 库中的 Command 类
const { Command } = require('commander');
// 创建一个新的命令实例
const program = new Command();

// 定义命令行程序
program
  // 创建一个名为 'serve' 的子命令
  .command('serve')
  // 添加一个必需的参数 <script>，用于指定要运行的脚本文件
  .argument('<script>')
  // 添加一个可选的端口选项，默认值为 80
  // -p 或 --port 都可以使用，后面需要跟一个数字
  .option('-p, --port <number>', 'port number', 80)
  // 定义当执行 serve 命令时要执行的动作函数
  .action(function () {
    // 使用 this.args[0] 获取第一个参数（脚本文件名）
    // 使用 this.opts().port 获取端口选项的值
    console.error('Run script %s on port %s', this.args[0], this.opts().port);
  });

// 解析命令行参数并执行相应的命令
program.parse();

// 使用示例：
//    node action-this.js serve --port 8080 index.js
// 这将输出：Run script index.js on port 8080
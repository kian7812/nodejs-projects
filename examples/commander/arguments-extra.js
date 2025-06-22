#!/usr/bin/env node

// 这是一个用于演示 Commander 额外参数特性的示例
// This is used as an example in the README for extra argument features.

const commander = require('commander');
const program = new commander.Command();

// 添加两个命令行参数：
// 1. drink-size: 必选参数，用于指定饮料杯的大小，只能是 small/medium/large 中的一个
// 2. timeout: 可选参数，用于指定超时时间（秒），默认值为 60 秒
program
  .addArgument(
    new commander.Argument('<drink-size>', 'drink cup size').choices([
      'small',
      'medium',
      'large',
    ]),
  )
  .addArgument(
    new commander.Argument('[timeout]', 'timeout in seconds').default(
      60,
      'one minute',
    ),
  )
  // 定义命令执行时的回调函数，打印用户输入的参数值
  .action((drinkSize, timeout) => {
    console.log(`Drink size: ${drinkSize}`);
    console.log(`Timeout (s): ${timeout}`);
  });

// 解析命令行参数
program.parse();

// 使用示例：
//    node arguments-extra.js --help    // 显示帮助信息
//    node arguments-extra.js huge      // 错误：huge 不是有效的饮料大小选项
//    node arguments-extra.js small     // 使用默认超时时间（60秒）
//    node arguments-extra.js medium 30 // 指定饮料大小为 medium，超时时间为 30 秒
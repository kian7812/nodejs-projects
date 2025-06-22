#!/usr/bin/env node

// 这是一个 commander.js 的示例程序，用于演示如何使用 action 处理器
// 这个例子在 README 中被用作 action 处理器的示例

const { Command } = require('commander');
const program = new Command();

// 配置命令行程序
program
  // 定义必需的位置参数 <name>，用户必须提供一个名字
  .argument('<name>')
  // 定义可选的标题选项，用于在名字前添加敬称（如 Mr、Ms、Dr 等）
  .option('-t, --title <honorific>', 'title to use before name')
  // 定义调试选项，用于显示调试信息
  .option('-d, --debug', 'display some debugging')
  // 定义 action 处理器，当命令执行时会调用这个函数
  .action((name, options, command) => {
    // 如果启用了调试模式，输出调试信息
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options);
    }
    // 如果提供了标题选项，则在名字前添加标题和空格
    const title = options.title ? `${options.title} ` : '';
    // 输出感谢信息
    console.log(`Thank-you ${title}${name}`);
  });

// 解析命令行参数并执行相应的 action
program.parse();

// 使用示例：
//    node thank.js John                    // 输出: Thank-you John
//    node thank.js Doe --title Mr          // 输出: Thank-you Mr Doe
//    node thank.js --debug Doe --title Mr  // 输出调试信息 + Thank-you Mr Doe
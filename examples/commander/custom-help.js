#!/usr/bin/env node

// 这个示例展示了 addHelpText 的简单用法
// 这个示例在 README 中被用作演示

const { Command } = require('commander');
const program = new Command();

// 添加一个命令行选项：-f 或 --foo，用于启用某些 foo 功能
program.option('-f, --foo', 'enable some foo');

// 使用 addHelpText 在帮助信息后添加自定义文本
// 'after' 参数表示在默认帮助信息之后添加内容
program.addHelpText(
  'after',
  `

Example call:
  $ custom-help --help`,
);

// 解析命令行参数
program.parse(process.argv);

// 尝试运行以下命令来查看效果：
//    node custom-help --help
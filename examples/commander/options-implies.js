#!/usr/bin/env node
// 导入 commander 包中的 Command 和 Option 类
const { Command, Option } = require('commander');
// 创建新的命令实例
const program = new Command();

// 这些注释应该能帮助你更好地理解代码的功能和使用方法。每个选项的 implies 关系（即选项之间的依赖关系）也都清晰地标注出来了。

program
  // 添加 --quiet 选项，当使用此选项时会自动设置 logLevel 为 'off'
  .addOption(new Option('--quiet').implies({ logLevel: 'off' }))
  // 添加 --log-level 选项，用于设置日志级别
  // 可选值：'info'、'warning'、'error'、'off'
  // 默认值为 'info'
  .addOption(
    new Option('--log-level <level>')
      .choices(['info', 'warning', 'error', 'off'])
      .default('info'),
  )
  // 添加 -c/--cheese 选项，用于指定奶酪类型
  // 当使用此选项时会自动设置 dairy 为 true
  .addOption(
    new Option(
      '-c, --cheese <type>',
      'Add the specified type of cheese',
    ).implies({ dairy: true }),
  )
  // 添加 --no-cheese 选项，表示不需要奶酪
  // 当使用此选项时会自动设置 dairy 为 false
  .addOption(
    new Option('--no-cheese', 'You do not want any cheese').implies({
      dairy: false,
    }),
  )
  // 添加 --dairy 选项，表示可能包含乳制品
  .addOption(new Option('--dairy', 'May contain dairy'));

// 解析命令行参数
program.parse();
// 打印解析后的选项对象
console.log(program.opts());

// 使用示例：
//    node options-implies.js                    // 使用默认选项
//    node options-implies.js --quiet            // 设置安静模式，自动关闭日志
//    node options-implies.js --log-level=warning --quiet  // 设置日志级别为警告并启用安静模式
//    node options-implies.js --cheese=cheddar   // 添加切达奶酪，自动设置 dairy 为 true
//    node options-implies.js --no-cheese        // 不使用奶酪，自动设置 dairy 为 false
#!/usr/bin/env node

// 引入 commander 模块
const commander = require('commander');
// 创建一个新的命令对象
const program = new commander.Command();

// 定义命令行选项
program
  .option('-d, --debug', 'output extra debugging') // 调试模式，输出额外的调试信息
  .option('-s, --small', 'small pizza size') // 小尺寸披萨选项
  .option('-p, --pizza-type <type>', 'flavour of pizza'); // 披萨类型选项，需指定类型

// 解析命令行参数，通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。该方法的参数是可选的，默认值为process.argv。
program.parse(process.argv);

// 获取解析后的选项
const options = program.opts();
// 如果启用了调试模式，输出选项信息
if (options.debug) console.log(options);
console.log('pizza details:');
// 如果选择了小尺寸披萨，输出相关信息
if (options.small) console.log('- small pizza size');
// 如果指定了披萨类型，输出披萨类型
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

// 下面示例命令，已验证
// node options-common.js -p
// node options-common.js -d -s -p vegetarian
// node options-common.js --pizza-type=cheese
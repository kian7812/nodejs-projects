// 引入 commander 模块
const { program } = require('commander');

// 定义命令行选项
program
  .option('--first')
  .option('-s, --separator <char>')
  .argument('<string>');

// 解析命令行参数
// 在 commander 模块中，program.parse() 方法用于解析命令行参数。它会读取命令行输入，识别定义的选项和参数，并将它们存储在 program 对象中。通过调用 parse()，你可以访问用户在命令行中输入的选项和参数，从而在程序中使用这些值。
program.parse();

// 获取选项对象
const options = program.opts();
const limit = options.first ? 1 : undefined;

// 根据选项决定分割限制
console.log(program.args[0].split(options.separator), options.separator, limit);

// 示例命令行调用
// node split.js --first --separator / a/b/c
#!/usr/bin/env node

// 这是一个 Commander.js 自定义参数处理的示例
// 用于演示如何在 README 中展示：
//    - 自定义参数处理功能
//    - 如何指定函数来自定义处理参数值

const commander = require('commander');
const program = new commander.Command();

/**
 * 自定义整数解析函数
 * @param {string} value - 要解析的字符串值
 * @returns {number} 解析后的整数
 * @throws {commander.InvalidArgumentError} 当值不是有效数字时抛出错误
 */
function myParseInt(value) {
  // parseInt 接受一个字符串和基数参数
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    // 如果解析失败，抛出 Commander.js 的无效参数错误
    throw new commander.InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}

/**
 * 自定义求和函数，用于处理可变参数
 * 当处理可变参数时，会使用之前传递给自定义处理函数的值
 * @param {string} value - 当前要处理的值
 * @param {number} total - 之前累积的总和
 * @returns {number} 新的总和
 */
function mySum(value, total) {
  return total + myParseInt(value);
}

// 定义 'add' 命令：接受两个整数参数并计算它们的和
program
  .command('add')
  .argument('<first>', 'integer argument', myParseInt)  // 必需的第一个参数，使用 myParseInt 处理
  .argument('[second]', 'integer argument', myParseInt, 1000)  // 可选的第二个参数，默认值为 1000
  .action((first, second) => {
    console.log(`${first} + ${second} = ${first + second}`);
  });

// 定义 'sum' 命令：接受多个值并计算它们的总和
program
  .command('sum')
  .argument('<value...>', 'values to be summed', mySum, 0)  // 可变参数，使用 mySum 处理，初始值为 0
  .action((total) => {
    console.log(`sum is ${total}`);
  });

// 解析命令行参数
program.parse();

// 可以尝试以下命令来测试功能：
//    node arguments-custom-processing add --help          // 显示 add 命令的帮助信息
//    node arguments-custom-processing add 2               // 使用默认值 1000 作为第二个参数
//    node arguments-custom-processing add 12 56           // 计算 12 + 56
//    node arguments-custom-processing sum 1 2 3           // 计算 1 + 2 + 3 的总和
//    node arguments-custom-processing sum silly           // 测试错误处理：无效数字
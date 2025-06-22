#!/usr/bin/env node

// 引入 commander 模块，这是一个用于构建命令行界面的工具
const commander = require('commander');
// 创建一个新的 Command 实例作为主程序
const program = new commander.Command();

// Commander 支持嵌套子命令
// .command() 方法可以添加带有动作处理器的子命令或可执行文件
// .addCommand() 方法可以添加一个已准备好的带有动作处理器的命令

// 使用 .command() 添加嵌套命令
// 创建一个名为 'brew' 的主命令
const brew = program.command('brew');
// 为 'brew' 命令添加 'tea' 子命令，并定义其动作
brew.command('tea').action(() => {
  console.log('brew tea');
});
// 为 'brew' 命令添加 'coffee' 子命令，并定义其动作
brew.command('coffee').action(() => {
  console.log('brew coffee');
});

// 使用 .addCommand() 添加嵌套命令
// 这个命令可以在另一个模块中单独创建
function makeHeatCommand() {
  // 创建一个名为 'heat' 的新命令
  const heat = new commander.Command('heat');
  // 为 'heat' 命令添加 'jug' 子命令，并定义其动作
  heat.command('jug').action(() => {
    console.log('heat jug');
  });
  // 为 'heat' 命令添加 'pot' 子命令，并定义其动作
  heat.command('pot').action(() => {
    console.log('heat pot');
  });
  return heat;
}
// 将 makeHeatCommand 函数创建的命令添加到主程序中
program.addCommand(makeHeatCommand());

// 解析命令行参数
program.parse(process.argv);

// 使用示例：
//    node nestedCommands.js brew tea    // 执行 brew tea 命令
//    node nestedCommands.js heat jug    // 执行 heat jug 命令
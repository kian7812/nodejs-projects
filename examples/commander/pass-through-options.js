#!/usr/bin/env node

// 引入 Commander.js 库中的 Command 类
const { Command } = require('commander');
// 创建一个新的命令程序实例
const program = new Command();

// 配置命令行参数和选项
program
  // 定义必需参数 <utility>：表示要执行的工具/命令（如 git、npm 等）
  .argument('<utility>')
  // 定义可选参数 [args...]：表示传递给工具的参数数组（如 status、push 等）
  .argument('[args...]')
  // 启用透传选项功能：允许将未知选项传递给子命令
  .passThroughOptions()
  // 定义程序自己的选项：-d 或 --dry-run，用于模拟运行模式
  .option('-d, --dry-run')
  // 定义命令执行时的回调函数
  .action((utility, args, options) => {
    // 根据是否启用 dry-run 模式决定显示的操作类型
    const action = options.dryRun ? 'Would run' : 'Running';
    // 输出将要执行或正在执行的命令
    console.log(`${action}: ${utility} ${args.join(' ')}`);
  });

// 解析命令行参数并执行相应的操作
program.parse();

// 使用示例：
//    node pass-through-options.js git status
//    node pass-through-options.js git --version
//    node pass-through-options.js --dry-run git checkout -b new-branch
//    node pass-through-options.js git push --dry-run

// 默认情况下，选项在命令参数前后均可被识别。如要使选项仅在命令参数前被识别，可以使用.passThroughOptions()。
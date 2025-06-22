#!/usr/bin/env node

// 导入 Commander.js 的核心模块
const { Command, Option } = require('commander');
// 创建一个新的命令程序实例
const program = new Command();

// 这个示例展示了如何使用生命周期事件钩子（hooks）

// 定义时间标签，用于性能分析
const timeLabel = 'command duration';

// 第一个钩子示例：性能分析钩子
program
  // 添加 --profile 选项，用于显示命令执行时间
  .option('--profile', 'show how long command takes')
  // preAction 钩子：在命令执行前触发
  .hook('preAction', (thisCommand) => {
    if (thisCommand.opts().profile) {
      // 如果启用了 profile 选项，开始计时
      console.time(timeLabel);
    }
  })
  // postAction 钩子：在命令执行后触发
  .hook('postAction', (thisCommand) => {
    if (thisCommand.opts().profile) {
      // 如果启用了 profile 选项，结束计时并显示执行时间
      console.timeEnd(timeLabel);
    }
  });

// 第二个钩子示例：调试跟踪钩子
program
  // 添加 --trace 选项，用于显示命令执行的调试信息
  .option('--trace', 'display trace statements for commands')
  // preAction 钩子：在命令执行前显示详细信息
  .hook('preAction', (thisCommand, actionCommand) => {
    if (thisCommand.opts().trace) {
      console.log('>>>>');
      // 显示即将执行的子命令名称
      console.log(
        `About to call action handler for subcommand: ${actionCommand.name()}`,
      );
      // 显示命令参数（%O 用于格式化对象）
      console.log('arguments: %O', actionCommand.args);
      // 显示命令选项（%o 用于格式化对象）
      console.log('options: %o', actionCommand.opts());
      console.log('<<<<');
    }
  });

// 第三个钩子示例：环境变量处理钩子
program
  // 添加 --env 选项，用于指定环境文件
  .option('--env <filename>', 'specify environment file')
  // preSubcommand 钩子：在解析子命令前触发
  .hook('preSubcommand', (thisCommand, subcommand) => {
    if (thisCommand.opts().env) {
      // 这个钩子的一个用例是在解析子命令前修改环境变量
      // 比如通过读取 .env 文件来设置环境变量
      console.log(`Reading ${thisCommand.opts().env}...`);
      // 设置端口环境变量
      process.env.PORT = 80;
      console.log(`About to call subcommand: ${subcommand.name()}`);
    }
  });

// 定义 start 子命令
program
  .command('start')
  // 添加可选的脚本参数，默认值为 'server.js'
  .argument('[script]', 'script name', 'server.js')
  // 添加延迟选项，用于在启动前等待指定秒数
  .option('-d, --delay <seconds>', 'how long to delay before starting')
  // 添加端口选项，默认值为 8080，可以从环境变量 PORT 读取
  .addOption(
    new Option('-p, --port <number>', 'port number').default(8080).env('PORT'),
  )
  // 定义命令的执行动作（异步函数）
  .action(async (script, options) => {
    // 如果指定了延迟时间，等待相应秒数
    if (options.delay) {
      await new Promise((resolve) =>
        setTimeout(resolve, parseInt(options.delay) * 1000),
      );
    }
    // 输出启动信息
    console.log(`Starting ${script} on port ${options.port}`);
  });

// 由于某些钩子或动作是异步的，所以使用 parseAsync 而不是 parse
program.parseAsync().then(() => {});

// 使用示例：
//    node hook.js start                                    // 基本启动命令
//    node hook.js --trace start --port 9000 test.js       // 带调试跟踪的启动
//    node hook.js --profile start --delay 5               // 带性能分析的延迟启动
//    node hook.js --env=production.env start              // 指定环境文件的启动
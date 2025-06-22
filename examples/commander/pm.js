#!/usr/bin/env node
// Shebang 行：告诉系统使用 node 来执行这个脚本

const { Command } = require('commander');
const program = new Command();

// 这是一个子命令示例，展示了如何实现独立的可执行文件作为子命令
//
// 当调用 `.command()` 并传入描述参数时，
// 这会告诉 Commander 你将使用独立的可执行文件来实现子命令
//
// 目前只实现了 `install` 和 `list` 命令，请查看 pm-install 和 pm-list.js 文件

program
  .name('pm')                    // 设置程序名称为 'pm'
  .version('0.0.1')              // 设置程序版本号
  .description('Fake package manager')  // 设置程序描述
  .command('install [package-names...]', 'install one or more packages')  // 定义 install 命令，支持多个包名参数
  .alias('i')                    // 为 install 命令设置别名 'i'
  .command('search [query]', 'search with optional query')  // 定义 search 命令，支持可选的查询参数
  .alias('s')                    // 为 search 命令设置别名 's'
  .command('update', 'update installed packages', {
    executableFile: 'myUpdateSubCommand',  // 指定 update 命令使用独立的可执行文件
  })
  .command('list', 'list packages installed', { isDefault: true });  // 定义 list 命令，并设置为默认命令

program.parse(process.argv);     // 解析命令行参数

// 在 macOS 或 Linux 上尝试以下命令：
//    ./examples/pm              // 直接执行脚本文件
//
// 尝试以下命令：
//    node pm                    // 显示帮助信息
//    node pm help install       // 显示 install 命令的帮助
//    node pm install -h         // 显示 install 命令的帮助（简写形式）
//    node pm install foo bar baz // 安装多个包
//    node pm install foo bar baz --force  // 强制安装多个包
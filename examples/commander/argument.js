#!/usr/bin/env node

// 这个示例展示了如何使用 argument() 函数来指定命令参数

const { Command } = require('commander');
const program = new Command();

program
  .name('connect')  // 设置命令名称为 'connect'
  .argument('<server>', 'connect to the specified server')  // 添加必需参数 server，尖括号表示这是必需参数
  .argument('[user]', 'user account for connection', 'guest')  // 添加可选参数 user，方括号表示这是可选参数，默认值为 'guest'
  .description('Example program with argument descriptions')  // 设置命令的描述信息
  .action((server, user) => {  // 定义命令执行时的回调函数，接收 server 和 user 两个参数
    console.log('server:', server);  // 打印服务器信息
    console.log('user:', user);  // 打印用户信息
  });

program.parse();  // 解析命令行参数

// 使用示例：
//    node argument.js --help  // 显示帮助信息
//    node argument.js main.remote.site  // 只提供必需参数 server
//    node argument.js main.remote.site admin  // 提供必需参数 server 和可选参数 user
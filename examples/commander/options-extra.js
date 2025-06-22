#!/usr/bin/env node

// 导入 commander 包中的 Command 和 Option 类
const { Command, Option } = require('commander');
const program = new Command();

program
  // 添加一个隐藏的帮助选项，用于设置密钥
  .addOption(new Option('-s, --secret').hideHelp())
  
  // 添加超时选项，默认值为60秒
  .addOption(
    new Option('-t, --time <delay>', 'timeout in seconds').default(60, 'one minute')
  )
  
  // 添加饮料大小选项，限制只能选择 small、medium 或 large
  .addOption(
    new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large'])
  )
  
  // 添加端口选项，可以从环境变量 PORT 中读取值
  .addOption(new Option('-p, --port <number>', 'prot number').env('PORT'))
  
  // 添加捐赠选项，预设值为20，并将输入值转换为浮点数
  .addOption(
    new Option('--donate [amount]', 'optional donation in dollars')
    .preset('20')
    .argParser(parseFloat)
  )
  
  // 添加禁用服务器选项，与 port 选项互斥
  .addOption(
    new Option('--disable-server', 'disables the server').conflicts('port')
  )
  
  // 添加免费饮料选项，选择此选项时会自动设置 drink 为 small
  .addOption(
    new Option('--free-drink', 'small drink included free').implies({
      drink: 'small',
    })
  )

// 解析命令行参数
program.parse();

// 输出所有选项的值
console.log('Options:', program.opts());

```
$ extra --help
Usage: help [options]

Options:
  -t, --timeout <delay>  timeout in seconds (default: one minute)
  -d, --drink <size>     drink cup size (choices: "small", "medium", "large")
  -p, --port <number>    port number (env: PORT)
  --donate [amount]      optional donation in dollars (preset: "20")
  --disable-server       disables the server
  --free-drink           small drink included free
  -h, --help             display help for command

$ extra --drink huge
error: option '-d, --drink <size>' argument 'huge' is invalid. Allowed choices are small, medium, large.

$ PORT=80 extra --donate --free-drink
Options:  { timeout: 60, donate: 20, port: '80', freeDrink: true, drink: 'small' }

$ extra --disable-server --port 8000
error: option '--disable-server' cannot be used with option '-p, --port <number>'
```
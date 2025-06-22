const { Command } = require('commander');
const program = new Command();

// 定义 'string-util' 命令
// 描述：用于一些 JavaScript 字符串工具的 CLI
// 版本：0.0.1

program
  .command('string-util')
  .description('cli to some javascript string utilities')
  .version('0.0.1')

// 定义 'split' 子命令
// 描述：将字符串拆分为单词列表
// 参数：<string> 要拆分的字符串
// 选项：--first 仅显示第一个子字符串
// 选项：-s, --separator <char> 分隔符字符，默认为逗号（,）

program
  .command('split')
  .description('split a string into a list of words')
  .argument('<string>', 'string to split')
  .option('--first', 'display only the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  })

// 定义 'join' 子命令
// 描述：将命令参数连接成一个字符串
// 参数：<string>... 一个或多个字符串
// 选项：-s, --separator <char> 分隔符字符，默认为逗号（,）

program
  .command('join')
  .description('join the command-arguments into a single string')
  .argument('<string>...', 'one or more strings')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((strings, options) => {
    console.log(strings.join(options.separator))
  })

program.parse();

// 下面示例命令，已验证通过
// node string-util.js
// node string-util.js help split
// node string-util.js split --separator=/ a/b/c
// node string-util.js split --first a,b,c
// node string-util join a b c d // 执行不通过


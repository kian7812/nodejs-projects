#!/usr/bin/env node
// 导入 commander 包中的 Command 和 Option 类
const { Command, Option } = require('commander');
// 创建新的 Command 实例
const program = new Command();

// 添加端口选项，可以通过命令行参数或环境变量设置
// 默认值为 80，可以通过 --port 或 -p 参数设置，也可以通过 PORT 环境变量设置
program.addOption(
  new Option('-p, --port <number>', 'specify port number')
    .default(80)
    .env('PORT'),
);

// 添加颜色输出选项，可以通过命令行参数或环境变量设置
// 可以通过 --colour 或 -c 参数启用，也可以通过 COLOUR 环境变量设置
program.addOption(
  new Option('-c, --colour', 'turn on colour output').env('COLOUR'),
);

// 添加关闭颜色输出选项，可以通过命令行参数或环境变量设置
// 可以通过 --no-colour 或 -C 参数禁用，也可以通过 NO_COLOUR 环境变量设置
program.addOption(
  new Option('-C, --no-colour', 'turn off colour output').env('NO_COLOUR'),
);

// 添加饮料大小选项，可以通过命令行参数或环境变量设置
// 可选值为 small、medium、large，可以通过 --size 或 -s 参数设置，也可以通过 SIZE 环境变量设置
program.addOption(
  new Option('-s, --size <type>', 'specify size of drink')
    .choices(['small', 'medium', 'large'])
    .env('SIZE'),
);

// 解析命令行参数
program.parse();
// 输出解析后的选项值
console.log(program.opts());

// 使用示例：
// 显示帮助信息
//    node options-env.js --help
//
// 使用默认值运行
//    node options-env.js
// 通过环境变量设置端口
//    PORT=9001 node options-env.js
// 环境变量和命令行参数同时使用（命令行参数优先级更高）
//    PORT=9001 node options-env.js --port 123
//
// 通过环境变量控制颜色输出
//    COLOUR= node options-env.js
//    COLOUR= node options-env.js --no-colour
//    NO_COLOUR= node options-env.js
//    NO_COLOUR= node options-env.js --colour
//
// 通过环境变量设置饮料大小
//    SIZE=small node options-env.js
// 设置无效的大小值（会被忽略，因为不在可选值范围内）
//    SIZE=enormous node options-env.js
// 同时使用环境变量和命令行参数（命令行参数优先级更高）
//    SIZE=enormous node options-env.js --size=large
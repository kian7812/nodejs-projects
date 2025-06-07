#!/usr/bin/env node

/**
 * 这是一个简单的命令行工具，用于解压RAR文件
 * 使用方式: unrar <input> [options]
 * 选项:
 *   -o, --output: 输出目录
 *   -p, --password: RAR文件密码
 */

// 导入所需的库
import {unrar} from 'unrar-promise'; // 用于解压RAR文件的库
import yargs from 'yargs'; // 用于解析命令行参数
import {hideBin} from 'yargs/helpers'; // 在ESM模块中处理命令行参数
import {readFile} from 'fs/promises'; // 用于读取文件
import {resolve, basename, extname} from 'path'; // 用于处理文件路径

// esm下不能require json文件
// esm下看全局使用 顶层await
// ESM模块下不能直接require JSON文件，需要使用readFile
// 读取package.json以获取版本信息
const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
)

// 使用yargs解析命令行参数
const {argv} = yargs(hideBin(process.argv))
  // 设置命令名称
  .scriptName('unrar') 
  // $0代表scriptName，<input> 文件名称
  .usage('$0 <input> [options]', 'unrar input file') 
  // 必须有第1个参数，否则报错
  .demandCommand(1, 'You must provide an input file') 
  // 第1个选项，输出目录
  .option('output', {
    alias: 'o', // 别名
    describe: 'Output directory', // 描述
    type: 'string', 
    default: '.' // 默认当前目录
  })
  // 第2个线下，密码
  .option('password', {
    alias: 'p',
    describe: 'Password',
    type: 'string'
  })
  // help
  .help('help')
  .alias('h', 'help')
  // 版本
  .version(pkg.version)
  .alias('V', 'version')

// 解构获取输入文件和输出目录参数
let {input, output, password} = argv
// 处理输出路径：如果没有指定，则使用输入文件名(不含扩展名)作为输出目录
output = resolve(process.cwd(), output || basename(input, extname(input)))

// 执行解压操作
await unrar(input, output, {
  password
})

// 输出完成信息
console.log('unrar done');

// 使用示例: unrar demo.rar -p q12345 -o test

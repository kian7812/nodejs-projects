
# 参考：
- 文件写的很清楚 https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md
- https://github.com/tj/commander.js/tree/master/examples
- 编写代码来描述你的命令行界面。 Commander 负责将参数解析为选项和命令参数
- 简单理解：读取命令行选项和参数，然后执行其它调用如.action。
- 各种变量都保存在 new Command() 对象中

## 声明 program 变量

为简化使用，Commander 提供了一个全局对象。本文档的示例代码均按此方法使用： 
```
// CommonJS (.cjs)
const { program } = require('commander');
```

如果程序较为复杂，用户需要以多种方式来使用 Commander，如单元测试等。创建本地 Command 对象是一种更好的方式：
```
// TypeScript (.ts)
import { Command } from 'commander';
const program = new Command();
```

## parse

- 在 commander 模块中，program.parse() 方法用于解析命令行参数。它会读取命令行输入，识别定义的选项和参数，并将它们存储在 program 对象中。通过调用 parse()，你可以访问用户在命令行中输入的选项和参数，从而在程序中使用这些值。
- 解析命令行参数，通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。该方法的参数是可选的，默认值为process.argv。

## 不设置为全局 node 命令的执行方式

- 直接 node 执行文件 加上 参数
```
// 下面是一些示例命令，已验证通过
node options-common.js -d -s -p vegetarian
// node string-util.js
// node string-util.js  help split
// node string-util.js  split --separator=/ a/b/c
```

## 选项 option

- 解析后的选项可以通过Command对象上的.opts()方法获取，同时会被传递给命令处理函数。
- 常用选项类型，boolean 型选项和带参数选项
- 可以设置参数（使用尖括号声明在该选项后）
- 通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。该方法的参数是可选的，默认值为process.argv。
- 选项的默认值 `option('-c, --cheese <type>', 'add the specified type of cheese', 'blue')`

## 参数类型占位符

```
在 commander 模块中，除了 <string> 之外，还有其他几种常用的参数类型占位符，用于定义命令行参数的期望格式。以下是一些常见的占位符：
1. <number>：表示期望接收一个数字参数。
2. <file>：表示期望接收一个文件路径参数。
3. [optional]：表示一个可选参数，方括号表示该参数不是必需的。
4. <required>：表示一个必需参数，尖括号表示该参数是必需的。
这些占位符主要用于帮助开发者理解参数的用途和期望的输入类型，但在代码中并不会对输入进行类型验证。开发者需要自行处理输入的验证和转换。
```

## command 

- 用来定义命令
- 在多命令程序中，每个命令（或命令的独立可执行文件）都有一个操作处理程序。
- 使用.command()创建子命令

## addCommand

- 使用.addCommand()向program增加配置好的命令。

## argument

- 命令参数

## usage

- 通过这个选项可以修改帮助信息的首行提示

## 重写退出和输出

- 默认情况下，在检测到错误、打印帮助信息或版本信息时 Commander 会调用process.exit方法。
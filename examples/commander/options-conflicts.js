#!/usr/bin/env node
const { Command, Option } = require('commander');
const program = new Command();

// 示例1：使用 .conflicts() 处理单个选项冲突
// 这里展示了如何使用 .conflicts() 方法来指定选项之间的互斥关系
program
  .command('pay')
  .addOption(new Option('--cash').conflicts('creditCard')) // 现金支付选项，与信用卡支付互斥
  .addOption(new Option('--credit-card')) // 信用卡支付选项
  .action((options) => {
    if (options.cash) {
      console.log('Paying by cash');
    } else if (options.creditCard) {
      console.log('Paying by credit card');
    } else {
      console.log('Payment method unknown');
    }
  });

// 示例2：默认值和环境变量
// 展示了默认值不会触发冲突，但环境变量会被检查冲突
program
  .command('source')
  .addOption(
    new Option('-p, --port <number>', 'port number for server')
      .default(80) // 设置默认端口为80
      .env('PORT'), // 允许通过环境变量PORT设置端口
  )
  .addOption(
    new Option(
      '--interactive',
      'prompt for user input instead of listening to a port',
    ).conflicts('port'), // 交互模式与端口选项互斥
  )
  .action((options) => {
    if (options.interactive) {
      console.log('What do you want to do today?');
    } else {
      console.log(`Running server on port: ${options.port}`);
    }
  });

// 示例3：多选项冲突
// 展示了如何处理多个选项之间的互斥关系
// 注意：否定选项（如 --no-colour）与肯定选项使用相同的选项名
program
  .command('paint')
  .addOption(
    new Option('--summer', 'use a mixture of summer colors').conflicts([
      'autumn',
      'colour',
    ]), // 夏季配色与秋季配色和单一颜色互斥
  )
  .addOption(
    new Option('--autumn', 'use a mixture of autumn colors').conflicts([
      'summer',
      'colour',
    ]), // 秋季配色与夏季配色和单一颜色互斥
  )
  .addOption(new Option('--colour <shade>', 'use a single solid colour')) // 单一颜色选项
  .addOption(new Option('--no-colour', 'leave surface natural')) // 自然表面选项
  .action((options) => {
    let colour = 'not specified';
    if (options.colour === false) {
      colour = 'natural';
    } else if (options.colour) {
      colour = options.colour;
    } else if (options.summer) {
      colour = 'summer';
    } else if (options.autumn) {
      colour = 'autumn';
    }
    console.log(`Painting colour is ${colour}`);
  });

program.parse();

// Try the following:
//    node options-conflicts.js pay --cash --credit-card
//
//    node options-conflicts.js source
//    node options-conflicts.js source --interactive
//    node options-conflicts.js source --port 8080 --interactive
//    PORT=8080 node options-conflicts.js source --interactive
//
//    node options-conflicts.js paint --colour=red --summer
//    node options-conflicts.js paint --no-colour --autumn
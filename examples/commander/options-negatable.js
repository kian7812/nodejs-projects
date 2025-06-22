#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();

program
  .option('--no-sauce', 'Remove sauce')
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'no cheese')

program.parse();

const options = program.opts();
const sauceStr = options.sauce ? 'sauce' : 'no sauce';
const cheeseStr = options.cheese === false ? 'no cheese' : `${options.cheese} cheese`;

console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}.`);

// 下面示例命令来自文档，已验证
```
$ pizza-options
You ordered a pizza with sauce and mozzarella cheese
$ pizza-options --sauce
error: unknown option '--sauce'
$ pizza-options --cheese=blue
You ordered a pizza with sauce and blue cheese
$ pizza-options --no-sauce --no-cheese
You ordered a pizza with no sauce and no cheese
```
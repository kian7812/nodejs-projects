#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();

program
    .option('-c, --cheese [type]', 'Add cheese with optional type')

program.parse(process.argv);

const options = program.opts();
if (options.cheese === undefined) {
  console.log('no cheese');
} else if (options.cheese === true) {
  console.log('add cheese');
} else {
  console.log(`add cheese type ${options.cheese}`);
}


```
// 下面示例命令，已验证
// node options-boolean-or-value
// node options-boolean-or-value --cheese
// node options-boolean-or-value --cheese mozzarella

$ pizza-options
no cheese
$ pizza-options --cheese
add cheese
$ pizza-options --cheese mozzarella
add cheese type mozzarella
```
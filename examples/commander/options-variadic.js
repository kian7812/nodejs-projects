#!/usr/bin/env node

const commander = require('commander');

const program = new commander.Command();

program
  .option('-n, --number <value...>', 'specify numbers')
  .option('-l, --letter [value...]', 'specify letters')

program.parse();

console.log('Options:', program.opts());
console.log('Remaining arguments:', program.args);

```
$ collect -n 1 2 3 --letter a b c
Options:  { number: [ '1', '2', '3' ], letter: [ 'a', 'b', 'c' ] }
Remaining arguments:  []
$ collect --letter=A -n80 operand // 执行不通过
Options:  { number: [ '80' ], letter: [ 'A' ] }
Remaining arguments:  [ 'operand' ]
$ collect --letter -n 1 -n 2 3 -- operand // 执行不通过
Options:  { number: [ '1', '2', '3' ], letter: true }
Remaining arguments:  [ 'operand' ]
```

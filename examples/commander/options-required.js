#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();

program.requiredOption('-c, --cheese <type>', 'pizza must have cheese')
program.parse();

console.log(`cheese: ${program.opts().cheese}`);

// 已验证
// node options-required.js --cheese blue 
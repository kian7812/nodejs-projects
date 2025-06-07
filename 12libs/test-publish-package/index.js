#!/usr/bin/env node
function main(){
  console.log('hello world');
}

export default main

export function hello (name) {
  console.log(`hello ${name}`);
}

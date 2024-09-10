const len = Buffer.byteLength('hello');
console.log(len);

// isBuffer
const a = {};
const buf = Buffer.from('hello');
console.log(Buffer.isBuffer(a));
console.log(Buffer.isBuffer(buf));

// concat
const buf1 = Buffer.from('this');
const buf2 = Buffer.from('is');
const buf3 = Buffer.from('a');
const buf4 = Buffer.from('cancat');

const buf5 = Buffer.concat([buf1, buf2, buf3, buf4]);
console.log(buf5);
console.log(buf5.toString());
console.log(buf5.toString('base64'));

// 5;
// false;
// true
// < Buffer 74 68 69 73 69 73 61 63 61 6e 63 61 74 >
// thisisacancat;
// dGhpc2lzYWNhbmNhdA ==;
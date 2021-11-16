const EventEmitter = require('events');

class CustomEvent extends EventEmitter { }

const ce = new CustomEvent();

ce.once('test', (res) => {
    console.log(res);
});

setInterval(() => {
    ce.emit('test', 'this is once event');
}, 1000);
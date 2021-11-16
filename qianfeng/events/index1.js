const EventEmitter = require('events');

class CustomEvent extends EventEmitter { }

const ce = new CustomEvent();

ce.on('error', (err, date) => {
    console.log(err);
    console.log(date);
});

ce.emit('error', new Error('this ia a new error'), Date.now());


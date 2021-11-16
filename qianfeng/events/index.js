const EventEmitter = require('events');

class CusTomEvent extends EventEmitter { }

const cs = new CusTomEvent();

cs.on('test', () => {
    console.log(111);
});


setInterval(() => {
    cs.emit('test');
}, 1000);
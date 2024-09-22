const EventEmitter = require("events");
// note: EventEmitter 是一个类，可被继承、实例化。
class CusTomEvent extends EventEmitter {}

const cs = new CusTomEvent();
// note：事件处理程序会被放到事件队列里（感觉和事件循环的队列不是一个）
cs.on("test", () => {
  console.log("clg: test");
});

cs.emit("test");

// setInterval(() => {
//   cs.emit("test");
// }, 1000);

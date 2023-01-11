const EventEmitter = require("events");


//memory leak detected
class MyEmitter extends EventEmitter{}

var emitter = new MyEmitter();
emitter.setMaxListeners(1);
EventEmitter.defaultMaxListeners = 40;
console.log(`emitter: ${emitter.getMaxListeners()}`);

emitter.on("data",() =>{
    console.log("data event emitted");
}).on("message", ()=>{
    console.log("message event emitted");
}).on("data",()=>{
    console.log({problem: true});
})

emitter.emit('data');
emitter.emit('message');
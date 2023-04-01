const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    
    setTimeout(function(){
        
    }, 3000);
});

myEmitter.emit('event');
// setTimeout(function(){
    
// }, 3000);
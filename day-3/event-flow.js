// Step 1: Create an Event Emitter
const EventEmitter = require('events');
const myEmitter = new EventEmitter(); //  instance 

// Step 2: Register an Event Listener with an Attached Callback Function
myEmitter.on('myEvent', (data) => {
  console.log('Event occurred with data:', data); // callback function
});

// Step 3: Emit an Event
myEmitter.emit('myEvent', 'Hello, World!');


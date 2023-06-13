const EventEmitter = require('events');
// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();
// Define an event handler function
const eventHandler = () => {
    console.log('Event occurred!');
};
// Attach the event handler to the 'myEvent' event
myEmitter.on('swaraj', eventHandler); // created event
//  name , code
// Emit the 'myEvent' event
myEmitter.emit('swaraj');


const mySchool = () => {
    console.log("INside my school")
}

myEmitter.on('newton-school', mySchool)

myEmitter.emit('newton-school')

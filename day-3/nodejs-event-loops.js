// Let's illustrate the Node.js Event Loop with a simple example:
// Step 1: Import required modules
const fs = require('fs'); // file system

// Step 2: Initiate an asynchronous I/O operation
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);
  }
});
// Step 3: Perform a synchronous operation
console.log('Synchronous operation: Hello, World!');
// Step 4: Set a timer
setTimeout(() => {
  console.log('Timer expired: 6 second');
}, 6000);
// Step 5: Execute a callback function
const callbackFunction = () => {
  console.log('Callback function executed');
};
callbackFunction();

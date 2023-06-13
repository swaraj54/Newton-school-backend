const os = require('os');

console.log('Platform:', os.platform());
console.log('Release:', os.release());
console.log('Hostname:', os.hostname());
console.log('CPUs:', os.cpus());
console.log('Total Memory:', os.totalmem() / 1024 / 1024, 'MB');
console.log('Free Memory:', os.freemem() / 1024 / 1024, 'MB');
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Constants:', os.constants);

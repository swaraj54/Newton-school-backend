const fs = require('fs'); // here we created instance of fs
// by using fs module

fs.readFile('newton-school.txt', 'utf8', (err, data) => {
    if (err) return err;
    console.log(data)
})

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) return err;
    console.log(data)
})

fs.readFile('jsonfile.json', 'utf8', (err, data) => {
    if (err) return err;
    console.log(data)
})



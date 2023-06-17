// import express from 'express'; // es6 syntax
const express = require('express'); // es5 syntax
const app = express();
// req = request - which will get from user like data - user = frontend
// res = response - which we respond to user = backend to frontend
app.get('/users', (req, res) => { // routing
    const { title } = req.body;
    // access users from mongodb
    // also we can save user data into mongodb
    res.send("Hello from express for Newton School Students !")
})
app.get('/posts/:postId', (req, res) => {
    const id = req.params.postId;
    // console.log(id)
    res.send(`${id} - this is id you passed!`);
})
app.listen('8000', () => {
    console.log("Server started on port 8000 🚀")
})
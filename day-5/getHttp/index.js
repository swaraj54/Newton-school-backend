// Step 1 - import express
// step 2  - creaTE INSnstance
// step 2.1 - create routes 
// step 3 - provide port number to server to express

// get method is used for retrive the data

const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send("Hello from backend server from / !")
})

app.get('/heelo', (req, res) => {
    res.send("Hello from backend server from heelo!")
})

app.get("*", (req, res) => {
    res.send('Page not available..')
})

app.listen("8000", () => {
    console.log("Server Running on port 8000")
})
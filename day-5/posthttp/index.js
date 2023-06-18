// console.log("Hello for post request")
// Step 1 - import express
// step 2  - creaTE INSnstance
// step 2.1 - create routes 
// step 3 - provide port number to server to express


const express = require('express');

const app = express();

app.use(express.json()); // for parsing the data

app.post('/registration', (req, res) => {
    // console.log(req.body);
    const { name, age } = req.body;
    // console.log(name, "-name", age, "-age")
    if (!name) return res.send("Name is required!")
    if (!age) return res.send("Age is required!");

    // we will perform mongodb task to save user (name, age) into mongoddb
    return res.send("We received name and age..");
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    // console.log(email,password)
    if (!email) return res.send("Email is required!")
    if (!password) return res.send("Password is required!")
    // to perfrom to auth user by using email and password
    return res.send("ok")
})

app.get('/', (req, res) => {
    return res.send("Response..")
})

app.listen('8000', () => {
    console.log("Server started on port 8000")
})

// import express

import express from 'express';
import { createBlog } from './controllers/blogControllers.js';
import mongoose from 'mongoose';

//create instance

const app = express();

mongoose.connect("mongodb+srv://swaraj1920:swaraj1920@cluster0.6yd9l.mongodb.net/newton-school-db").then(() => console.log('Mongodb Connected!'))

app.get('/', (req, res) => {
    res.send("Hello from server update..")
})

app.post('/create-blog' ,createBlog)



app.listen("8000", () => {
    console.log("Server is running on port 8000.")
})
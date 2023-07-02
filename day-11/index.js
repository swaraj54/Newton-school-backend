import express from 'express';
import Product from './modals/ProductSchema.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    res.send("Working..")
})

app.get('/aggregate', async (req, res) => {
    try {
        const pipeline = [
            { $match: { category: 'laptop' } }, // match document with category 'phone
            { $group: { _id: '$category', count: { $sum: 1 } } }// Group documents by category and calculate the count
        ]

        const result = await Product.aggregate(pipeline)
        return res.send(result);
    } catch (error) {
        return res.send(error)
    }
})

mongoose.connect('mongodb+srv://swaraj1920:swaraj1920@cluster0.6yd9l.mongodb.net/arena2')
    .then(() => console.log("Db connected!"))
    .catch((err) => console.log(err))

app.listen(8000, () => {
    console.log("Listening on Port 8000")
})
import mongoose, { model } from 'mongoose'

const blogSchema = new mongoose.Schema({
    // key : type of value
    title: { type: String, required: true }, // Introduction of react
    content: { type: String, required: true }, // this is contect, this is contect
    author: { type: String, required: true }, // Swaraj
})

module.exports = mongoose.model('Blog', blogSchema);

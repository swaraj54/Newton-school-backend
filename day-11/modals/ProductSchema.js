import mongoose, { Schema } from "mongoose";


const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String
})

export default mongoose.model("Product", productSchema)
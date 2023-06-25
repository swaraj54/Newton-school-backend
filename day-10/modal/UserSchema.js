import mongoose from "mongoose";

import { Schema } from "mongoose";


const User = new Schema({
    name: String,
    email: String,
    password: String,
    number: Number,
    age : Number
})


export default mongoose.model("Users", User);

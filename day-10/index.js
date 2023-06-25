import express from 'express';
import mongoose from 'mongoose';
import Users from './modal/UserSchema.js';
import { addProduct } from './controllers/productControllers.js';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome..")
})

app.post("/add-product", addProduct);

app.post('/register', async (req, res) => {
    try {
        const { name, password, confirmPassword, number, email, age } = req.body;
        console.log(req.body, "- req.body")
        if (!name) return res.send("Name is required!");
        if (!password) return res.send("Password is required!");
        if (!confirmPassword) return res.send("Confrim password is required!");
        if (!number) return res.send("Number is required!");
        if (!age) return res.send("Age is required!")
        if (!email) return res.send("Email is required!");
        if (password !== confirmPassword) {
            return res.send("Password and confirm password are not matched!")
        }

        const user = new Users({
            name: name,
            password: password,
            number: number,
            email: email,
            age: age
        })

        await user.save();
        return res.send("You are successfully registered.")


    } catch (error) {
        return res.send(error)
    }
})

mongoose.connect('mongodb+srv://swaraj1920:swaraj1920@cluster0.6yd9l.mongodb.net/newtonschooldb').then(() => {
    console.log("Db connected!")
})

app.listen("8000", () => {
    console.log("Server is running on port 8000")
})
import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.json()); // to prase data

// CURD - > CREATE UPDATE READ DELETE

// read
app.get("/get-product", async (req, res) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data)
        return res.send({ message: "OK", data: response.data })
    } catch (error) {
        return res.send(error)
    }
})
// read
app.get('/get-single-product/:id', async (req, res) => {
    try {
        const data = req.params;
        // return res.send(data.id)
        const response = await axios.get(`https://fakestoreapi.com/products/${data.id}`)

        return res.send(response.data)

    } catch (error) {
        return res.send(error)
    }
})

// create
app.post('/create-product', async (req, res) => {
    try {
        const { title, price, description, category, image } = req.body;

        const response = await axios.post('https://fakestoreapi.com/products', {
            title: title,
            price: price,
            description: description,
            category: category,
            image: image
        })
        res.send(response.data)

    } catch (error) {
        return res.send(error)
    }
});

// update
app.put('/update-product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price, description, category, image } = req.body;

        const response = await axios.put(`https://fakestoreapi.com/products/${id}`, {
            title, price, description, category, image
        })
        return res.send(response.data)

    } catch (error) {
        return res.send(error)
    }
});

// delete
app.delete('/delete-product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.delete(`https://fakestoreapi.com/products/${id}`)
        return res.send(response.data);
    } catch (error) {
        return res.send(error)
    }
});


app.listen("8000", () => {
    console.log("Server is listing on port 8000")
})
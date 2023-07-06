import express from 'express';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator'

const app = express();

mongoose.connect('mongodb+srv://swaraj1920:swaraj1920@cluster0.6yd9l.mongodb.net/arena7').then(() => {
    console.log("Connected to Db")
}).catch((error) => {
    console.log(error)
})

const Product = mongoose.model("Product", {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

Product.pre('save', function (next) {
    this.name = this.name.toUpperCase();
    next();
})


app.use(express.json());

app.post('/product', [
    body('name').notEmpty().withMessage('Name is required'),
    body('price').notEmpty().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('quantity').notEmpty().isInt({ min: 0 }).withMessage("Quantity must be a positive integer")
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.json({ errors: error.array() })
    }

    const product = new Product(req.body);
    product.save().then(() => {
        res.json({
            message: "Product added !"
        })
    }).catch((error) => {
        res.json({
            error: error.message
        })
    })

})


const validatePrice = (req, res, next) => {
    const { price } = req.body;
    if (price <= 0) {
        return res.json({
            error: "Price must be greater than 0"
        })
    }
    next();
}

const validateQuantity = (req, res, next) => {
    const { quantity } = req.body;
    if (quantity <= 0) {
        return res.json({
            error: "Quantity must more than 0"
        })
    }
    next();
}

const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.json({
            error: 'Name is required'
        })
    }
    next();
}

app.post('/custom', validateName, validatePrice, validateQuantity, (req, res) => {
    const product = new Product(req.body);
    product.save().then(() => {
        return res.json({ message: 'Product added successfully..' })
    }).catch((error) => {
        return res.json({ error: error.message })
    })
})

app.get('/aggregation', (req, res) => {
    Product.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: { $multiply: ['$price', "$quantity"] } }
            }
        }
    ]).then((result) => {
        res.json({
            revenue: result[0].totalRevenue
        })
    }).catch((error) => {
        res.json({
            error: error.message
        })
    })
})


app.get('/query', (req, res) => {
    Product.find({ price: { $gte: 1000 } })
        .then((products) => {
            res.json({
                products: products
            })
        }).catch((error) => {
            res.json({ error: error.message })
        })
})





app.listen(3000, () => {
    console.log("Listing on port 3000")
})
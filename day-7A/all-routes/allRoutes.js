import express from 'express';

const router = express.Router();


router.use((req, res, next) => {
    console.log('This is a router-level middleware');
    next();
})

router.get('/login', (req, res) => {
    res.send(true)
})
router.get('/register', (req, res) => {
    res.send(true)
})
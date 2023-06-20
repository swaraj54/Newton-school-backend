import express from 'express';
import { Hello } from './controllers/auth-controller.js';

const app = express();

app.get("/", Hello)
app.get('/ding', dong)


app.listen('8000', () => {
    console.log("Server is ruinnig on port 8000")
})

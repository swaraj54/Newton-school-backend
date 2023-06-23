import express from 'express';
import morgan from 'morgan';
import router from './all-routes/allRoutes.js'

const app = express();

// app.use(morgan('combined'))

app.use(express.json())

const myMiddleware = (req, res, next) => {
    // can perform tasks here 
    console.log("Inside custom middleware");
    next()
}
app.use(myMiddleware)
// now the parsing mechnism is applicable for every request

app.use('/api/v1', router)



// app.use((req, res, next) => {
//     console.log("Inside middleware");
//     if (false) {
//         return res.send("Returing from middleware!!")
//     } else {
//         next();
//     }
// })

app.use((err, req, res, next) => {
    if (err) {
        return res.send(err)
    } else {
        next()
    }
})

app.post('/get-data', (req, res) => {
    try {
        const { message } = req.body;
        return res.send(message);
    } catch (err) {
        return res.send(err)
    }
})

app.get('/', (req, res) => {
    res.send("Hello from server")
})
app.get("/welcome", (req, res) => {
    res.send("Welcome..")
})

app.listen("8000", () => {
    console.log("Server is runnning on 8000")
})
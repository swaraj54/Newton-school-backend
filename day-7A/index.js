import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());

app.use(morgan('dev'))

const myMiddleware = (req, res, next) => {
    console.log('This is a custom middleware');
    next();
};
app.use(myMiddleware);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});


app.use((req, res, next) => {
    // console.log("Logged inside the middleware");
    // here we'll perform some task and on bases of the
    // we'll decide we nned trasfer user to next router or not 
    // return res.send("REturn from middlwraew")
    next();
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
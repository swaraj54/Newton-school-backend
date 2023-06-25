import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form method="POST" action="/submit">
        <input type="text" name="username" placeholder="Type your name.." />
        <input type="password" name="password" placeholder="Type your password.."/>
        <button type="submit">Login</button>
    </form>
    `)
})

app.post('/submit', (req, res) => {
    const name = req.body.username;
    const password = req.body.password;
    // save name and pass into db
    res.send(`My name is ${name} and my password is ${password}`)
})

app.listen("8000", () => {
    console.log("Port listening on 8000")
})
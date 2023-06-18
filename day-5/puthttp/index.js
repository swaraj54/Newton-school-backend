const express = require('express');

const app = express();

app.use(express.json()); // to parse the data 
// Simulated data - to be replaced with your actual data storage
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    // console.log(id,"-id") 
    const user = users.find((user) => user.id == id)
    // console.log(user, "- user")
    if (!user) return res.json({ message: "User not found!" })

     // for now we are perforing task over array but lateron we'll perform only on mongodb..
    user.name = name;
    user.email = email;
    console.log(user,"- user");
    return res.json({ message: "Updated data.", user })
})


app.listen("8000", () => {
    console.log("Server is running on port 8000")
})
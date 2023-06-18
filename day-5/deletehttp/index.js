const express = require('express');

const app = express();

let UsersList = [
    { id: 1, name: "Swaraj" },
    { id: 2, name: 'Raj' }
]

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    const userIndex = UsersList.findIndex((user) => user.id == id)
    // console.log(userIndex, "- userIndex")
    if (userIndex == -1) return res.send("User not found!");

    UsersList.splice(userIndex, 1);
    console.log(UsersList,"- Userslist")

    return res.send("User deleted successfully.")
})

app.listen("8000", () => {
    console.log("Server running on port 8000")
})
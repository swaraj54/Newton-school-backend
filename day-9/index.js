import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/public/index.html' )
})

app.listen("8000", ()=> {
    console.log("Listing on port 8000")
})
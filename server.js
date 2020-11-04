const express = require('express');
const mongoose = require('mongoose');
const {fOne,fTwo,fThree}=require("./db")


const dbURI = 'mongodb+srv://asemOne:asem1234@cluster0.xqniz.mongodb.net/ChallengThree?retryWrites=true&w=majority'
const connect = mongoose.connect(dbURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(express.json())


let port = 3000;
app.get("/app", (req, res) => {
    res.sendFile(__dirname + '/./compiled/client/app.js')
})
app.listen(port, () => {
    console.log(`listening `);
});

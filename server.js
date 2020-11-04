const express = require('express');
const mongoose = require('mongoose');
const { fOne, fTwo, fThree } = require("./db")


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


app.post('/', (req, res) => {
    res.send(req.body)
    let data = req.body;
    let fOneObj = {
        name: data.Name,
        email: data.Email,
        password: data.Password
    }
    let fTwoObj = {
        lineOne: data.LineOne,
        lineTwo: data.LineTwo,
        city: data.City,
        state: data.State,
        zipCode: data.Zipcode,
    }
    let fThreeObj = {
        card: data.CreditCardNumber,
        expDate: data.ExpirationDate,
        cvv: data.CVV,
        billingZipCode: data.BillingZipcode
    }

    let fOne = new fOne(fOneObj)
    fOne.save()
    let fTwo = new fTwo(fTwoObj)
    fTwo.save()
    let fThree = new fThree(fThreeObj)
    fThree.save()
    res.send(data)

})
app.listen(port, () => {
    console.log(`listening `);
});

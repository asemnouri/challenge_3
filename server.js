const express = require('express');

let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())

 
let port = 3000;
app.get("/app",(req,res)=>{
    res.sendFile(__dirname + '/./compiled/client/app.js')
})
app.listen(port, () => {
    console.log(`listening `);
});

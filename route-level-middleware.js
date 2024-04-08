const express = require('express');
const app = express();
const requestFilter = require('./middleware')

// app.use(requestFilter);
app.listen(4000);

app.get('/',requestFilter,(req,res)=>{
    res.send("welcome to home page");
})

app.get('/about',requestFilter,(req,res)=>{
    res.send("welcome to about page");
})

app.get('/user',requestFilter,(req,res)=>{
    res.send("welcome to user page")
})


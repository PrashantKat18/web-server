const express = require('express');

const app = express();

app.get('',(req,res)=>{
  res.send("hello this is home page")
  console.log("kk",req.query.name);

})

app.get('/about',(req,res)=>{
  console.log("kk",req.query.name);

  res.send("hello this is about page")
})

app.listen(4000);


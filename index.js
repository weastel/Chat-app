const express = require('express');

var app = express();

app.use('/assets',express.static('assets'));

app.get('/',(req,res)=>{
  res.render('index.ejs');
})

app.listen(4000);

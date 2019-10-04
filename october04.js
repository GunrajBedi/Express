const express = require('express');
const app = express();
app.get("/",function(req,res){
    res.send('ready 4')
});

app.listen(9030,function(){
    console.log('server ready');
});




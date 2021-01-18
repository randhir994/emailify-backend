const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({text:'Hi there'});
})

const PORT = process.envv.PORT || 5000;

app.listen(PORT);
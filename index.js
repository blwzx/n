const express = require('express');
const path = require('path');
const server = express();
server.get('/',(req,res)=>{
    res.sendFile(
        path.resolve('./yanhua/index.html')
    )
})
server.listen(80);
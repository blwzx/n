const express = require('express');
const path = ('path');
const server = express();
server.get('/',(req,res)=>{
    res.send('ok');
    // res.sendFile(
    //     path.resolve('./views/index.html')
    // )
})
server.listen(80);
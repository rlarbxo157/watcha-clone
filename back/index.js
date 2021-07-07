const express = require('express');
const app = express();
const PORT =process.env.PORT||3095;
const http = require('http').Server(app);

app.listen(PORT,()=> {
    console.log(`example ${PORT}`);
})

app.get('/',(req,res)=> {
    res.send('connect');
})
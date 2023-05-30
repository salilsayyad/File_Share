const express = require('express');
const router = require('./Routes/routes.js')
const app = express();

const port = 8000;

app.use('/',router)

app.listen(port,()=>{
    console.log("server listen on 8000")
})
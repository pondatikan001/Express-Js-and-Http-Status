const express = require('express');
const app = express();
const port = 8882;
const userService = require('./services/UserService')


app.use(express.json());
app.use(userService)


app.listen(port, ()=>{
    console.log(`Start in port`, port)
})
const express = require('express');
const app = express();
const UserController = require('../controller/userController');

app.get("/getUser",async(req, res) => {
    let body = req.body
    let result = await UserController.getUserController(body)
    res.send(result)
} )

app.post("/addUser", (req, res) => {
    let body = req.body
    UserController.addUserController(body)
    console.log(`body`, body)
    res.status(201).send("Test2")
 })

 module.exports = app
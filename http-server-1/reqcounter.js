const express = require("express");
const app = express();

let requestCounter = 0;

app.use((req, res, next) => {
    requestCounter = requestCounter + 1;
    next();
})

app.get('/user', (req, res) => {
    res.status(400).json({name: "john"})
})

app.get('/register', (req, res) => {
    res.status(300).json({name: "user registered"})
})

app.get('/rescounter', (req, res) => {
    res.status(400).json({requestCounter})
}) 

app.listen(3000)
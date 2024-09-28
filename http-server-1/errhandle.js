const express = require("express")
const app = express();

let errorCount = 0;

app.get("/user", (req, res) => {
    res.status(200).json({name: 'john'})
})

app.get("/createUser", (req, res) => {
    res.status(200).json({name: 'User created'})
})

app.get("/errorCount", (req, res) => {
    res.status(200).json({errorCount})
})

app.use((err, req, res, next) => {
    res.status(404).send({})
    errorCount = errorCount + 1
})

app.listen(3000);
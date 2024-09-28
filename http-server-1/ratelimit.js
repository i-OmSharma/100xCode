const express = require("express");
const app = express();

let  numOfReqForUser = {};
setInterval(() => {
    numOfReqForUser = {};
}, 1000);

app.use((req, res, nest) => {
    const useId = req.headers["user-id"]; 
    if (numOfReqForUser(req.header["user-id"])) {
        numOfReqForUser(req.header["user-id"] ) = numOfReqForUser(req.header["user-id"] ) + 1;
        if (numOfReqForUser(req.header["user-id"] > 5)) {
            res.status(404).send("no entry");
        } else {
            nest();
        }
    } else{
        numOfReqForUser(req.header["user-id"]) = 1;
        next();
    }
})

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3000);
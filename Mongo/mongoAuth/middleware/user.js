require('dotenv').config();
const jwt = require("jsonwebtoken");



function userMiddleware(req, res, next) {
    const token = req.headers.authorization; //Everything gets converted into lowercase when accesing the headeres

    const words = token.split(" ");
    const jwtToken = words[1]
    const decodedValue = jwt.verify(jwtToken, process.env.JWT_SECRET);
    if (decodedValue.username) { // jwt constains hashed version of username in it that username is being used by the middlweware. 
        req.username = decodedValue.username // which is being used here for extracting the username from decoded jwt.
        next();
    } else {
        res.status(300).json({
            msg: "You are not Authenticated"
        })
    }
}

module.exports = userMiddleware;
//Implement Auth logic
// Needs to check the headers and validate the admin from the admin DB.
require('dotenv').config();
const jwt = require("jsonwebtoken");


function adminMiddleware(req, res, next) {
    const token = req.headers.authorization; //Everything gets converted into lowercase when accesing the headeres

    const words = token.split(" "); //Bearer token
    const jwtToken = words[1] //["Bearer", "token"]
    const decodedValue = jwt.verify(jwtToken, process.env.JWT_SECRET); //token
    if (decodedValue.username) { // jwt constains hashed version of username in it that username is being used by the middlweware. 
        next();                  // which is being used here for extracting the username from decoded jwt.
    } else {
        res.status(300).json({
            msg: "You are not Authenticated"
        })
    }
}

module.exports = adminMiddleware;


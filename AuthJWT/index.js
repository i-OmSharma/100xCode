// decode, verify, generate
const jwt = require("jsonwebtoken")

//generatting

const  value = {
    name: "Om",
    accountNumber: 123
}

//jwt
//function is sign not generate
const token = jwt.sign(value, "secPass");
console.log(token);
// this token has been generated using this secPass, and hence this token can only be verified using this secPass




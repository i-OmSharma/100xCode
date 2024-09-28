const jwt = require("jsonwebtoken")
const zod = require("zod")

const jwtPass = "secPass"

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)

//Generate

/*

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
        
    const signature =  jwt.sign({
        username
    }, jwtPass)

    return signature;
}

const ans = signJwt("uiouiouio@email.com", "dasd")
console.log(ans);

*/

//-------------------------------------------------------------------//

//Decode

/*
function decodeJwt(token) {
    const decoded = jwt.decode(token)
    if(decoded) {
        return true;
    } else {
        return false; 
    }
}

console.log(decodeJwt("asdasdasdasd"));
*/

//--------------------------------------------------------------------//

//Verify

function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPass)
          
    } catch (e) {
        ans = false;
    } 
    return ans ;
}

console.log(verifyJwt("asdasdasd"));




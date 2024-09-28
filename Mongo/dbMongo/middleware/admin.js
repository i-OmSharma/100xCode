const { Admin } = require("../db/index")
// Handling the auth

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await Admin.findOne({
        username: username,
        password: password
    }) 
    if (admin) {
        next();
    } else {
          res.status(400).json({
            msg: "Admin not Exists"
        })
     }
}

module.exports = adminMiddleware;
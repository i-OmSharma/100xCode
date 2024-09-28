//CURD => Create, Update, Read, Delete!!!

const express = require("express"); 
const jwt = require("jsonwebtoken");
const jwtPassword = "123123";

const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin999@cluster0.cs07b.mongodb.net/user_app")

const User = mongoose.model('Users', { 
    name: String, 
    email: String,
    password: String });

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name; 

    const existingUser = await User.findOne({email: username})
    
    if(existingUser) {
        return res.status(400).send("User already exixts")
    };
    const user = new User({
        name: name, 
        email: username, 
        password: password
    });
    try {
        await user.save();
        res.json({
            msg: "User created succesfully"
        });
    } catch(err) {
        res.status(500).json({
            msg: "Error while craeating!",
            error: err.message
        })
    }
    
})

app.listen(3000)



// mongoose.connect{
//     //url
// };

// const user = mongoose.model()
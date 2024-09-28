require('dotenv').config();
const { Router } = require("express");
const router = Router();
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const jwt = require("jsonwebtoken");

router.post('/signup', async(req, res) => {
// admin signup
    const username = req.body.username;
    const password = req.body.password; 

    await Admin.create({
        username,
        password,

    })
    res.json({
        msg: "Adim created"
    })
});

router.post('/signin', async(req, res) => {
// admin signin
    const username = req.body.username;
    const password = req.body.password; 

    const user = await Admin.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        },process.env.JWT_SECRET );
        res.json({
            token
        })
    } else {
        res.status(301).json({
            msg: "Invalid email/pass"
        })
    }
});

router.post('/coursecreate', adminMiddleware, (req, res) => {
// create courses
});

router.get('/courses', (req, res) => {
// fetch all courses
});


module.exports = router;
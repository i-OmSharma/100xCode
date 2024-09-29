require("dotenv").config();
const { Router } = require("express");
const router = Router();
const adminMiddleware = require("../middleware/admin");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");

//User Router
router.post('/signup', (req, res) => {
//user signup
});

router.post('/signin', (req, res) => {
// user signin
});

router.get('/courses', (req, res) => {
    //fetch all courses
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const username = req.username;
    console.log(username);
    
});

router.get('/purchasedcourses', userMiddleware, (req, res) => {
    //fetching courses
});

module.exports = router;

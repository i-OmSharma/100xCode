const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

//UserRoutes

router.post('/signup', (req, res) => {
//SignUp
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        msg: "User created succesfully"
    });
});

router.get('/courses', async (req, res) => {
//FetchAllcoyurses
    const response = await Course.find({});
        res.json({
        courses: response
    })
})

router.post('/courses/:courseId', userMiddleware, (req, res) => {
//coursePurchase
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username,
    }, {
        purchasedCourses: {
            "$push": courseId
        }
    });
    res.json({
        msg: "Course purchased succesfully"
    })
});

router.get('/purchasedCoursed', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.headers
    })
    console.log(user.purchasedCourses);
    const courses = await courses.find({
        _id: {
            "$in": user.purchasedCourses 
        }
    })
    res.json({
        courses: courses
    })
})

module.exports = router;                                                                                                                                                                                                                                                                                  
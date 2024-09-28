const { Router } = require("express");
const router = Router();
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index")
// Admin Routes

router.post('/signup', async (req, res) => {
//signin
    const username = req.body.username;
    const password = req.body.password; 

    await Admin.create({
        username: username,
        password: password,

    })
    res.json({
        msg: "Adim created"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
//createCourse
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //Use Zod here.
    const newCourse = await Course.create({
        //when u know key and the value are ther same then u can just do this
        title,
        description,
        imageLink,
        price
    }) 
    res.json({
        msg: "Course created successfully", courseId: newCourse._id
    })
});

router.get('/showcourse', adminMiddleware, async  (req, res) => {
//fetchAllcourse
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;
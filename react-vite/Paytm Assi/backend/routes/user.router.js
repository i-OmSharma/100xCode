import express from "express";

const userRouter = express.Router()

router.get("/", (req, res) => {
    res.send("user Router")
})

export default userRouter
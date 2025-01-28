import express from "express";
import userRouter from "./user.router.js"

const mainRouter = express.Router()

router.use("/user", userRouter)

export default mainRouter
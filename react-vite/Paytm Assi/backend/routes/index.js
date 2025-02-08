import express from "express";
import userRouter from "./user.router.js"
import accountRouter from "./account.router.js";

const mainRouter = express.Router()

router.use("/user", userRouter)
router.use("/account", accountRouter)

export default mainRouter
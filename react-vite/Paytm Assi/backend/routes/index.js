import express from "express";
import userRouter from "./user.router.js"
import accountRouter from "./account.router.js";

const mainRouter = express.Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/account", accountRouter)

export default mainRouter
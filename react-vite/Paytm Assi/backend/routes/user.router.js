import express from "express";
import zod from "zod"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config";
import { userAuth } from "../models/user.models";

const userRouter = express.Router()

const signupSchema = zod.object({
    userName: zod.string(),
    password: zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
})


userRouter.get("/", (req, res) => {
    res.send("user Router")
})

userRouter.post("/signup", async(req, res) => {
    const body = req.body
    const {success} = signupSchema.safeParse(req.body)
    if(!success) {
        return res.json({
            message: "Incorrect Credentials"
        })
    }

    const existingUser = await userAuth.findOne({
        userName: body.userName
    })

    if(existingUser) {
        return res.json({
            message: "Email alreasy taken"
        })
    }

    const dbuser = await userAuth.create(body);
    const token = jwt.sign({
        userId: dbuser._id
    }, JWT_SECRET)
    res.json({
        message: "User created succesfully",
        token: token
    })
})

export default userRouter
import express from "express";
import zod from "zod"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
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

    try{
        const body = req.body
        const {success} = signupSchema.safeParse(body)
        if(!success) {
            return res.status(400).json({
                message: "Incorrect Credentials"
            })
        }
    
        const existingUser = await userAuth.findOne({
            userName: body.userName
        })
    
        if(existingUser) {
            return res.status(409).json({
                message: "Username already taken"
            })
        }
    
        const hashedPassword = await bcrypt.hash(body.password, 8)
    
        const newUser = await userAuth.create({
            ...body,
            password: hashedPassword
        })
    
        const token = jwt.sign({
            userId: newUser._id
        }, JWT_SECRET, {expiresIn: "1h"})
        res.json({
            message: "User created succesfully",
            token: token
        })
    } catch(error) {
        console.log("error in SignUp:", 500)
        res.status(500).json({message:"internal server error"})
        
    }
})



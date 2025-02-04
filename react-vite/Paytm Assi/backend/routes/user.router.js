import express from "express";
import zod from "zod"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { JWT_SECRET } from "../config";
import { userAuth } from "../models/user.models";
import authMiddleware from "./middleware";

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
            userName: body.userName.toLowerCase()
        })
    
        if(existingUser) {
            return res.status(409).json({
                message: "Username already taken"
            })
        }
    
        const hashedPassword = await bcrypt.hash(body.password, 8)
    
        const newUser = await userAuth.create({
            ...body,
            userName: body.userName.toLowerCase(),
            password: hashedPassword
        })
    
        const token = jwt.sign({
            userId: newUser._id
        }, JWT_SECRET, {expiresIn: "1h"})
        res.status(201).json({
            message: "User created succesfully",
            token: token
        })
    } catch(error) {
        console.log("Error in SignUp:", error)
        res.status(500).json({message:"internal server error"})
        
    }
})


// SignIn


const signInSchema = zod.object({
    userName: zod.string(),
    password: zod.string().min(6)
})

userRouter.post('/signin', async(req, res) => {
    try{
        const body = req.body

        // validate Inputs
        const {success} = signInSchema.safeParse(body)
        if(!success) {
            return res.status(400).json({
                message: "Incorrect Credentials"
            })
        }
        
        //check user in DB
        const existingUser = await userAuth.findOne({
            userName: body.userName.toLowerCase()
        })
    
        if(!existingUser) {
            return res.status(401).json({
                message: "User not exists"
            })
        }

        //verifying password
        const isPasswordValid = await bcrypt.compare(body.password, existingUser.password)
        if(!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid Username or Password"
            })
        }

        //Genertate TOKEN
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET, {expiresIn: "1h"})
        res.status(200).json({
            message: "User Signin succesfully",
            token: token,
            userId: existingUser._id
        })


    } catch(error) {
        console.log("Error sign-in", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

//finding user with suggested name
userRouter.get("/bulk", async (req, res) => {

    try{
        const filter = req.query.filter || ""

        const users = await userAuth.find({
            $or: [{
                firstName: {
                    "$regex": filter, "$options": "i"
                }
            }, {
                lastName: {
                    "$regex": filter, "$options": "i"
                }
            }]
        })
        res.json({
            users: users.map(user => ({
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    } catch(error) {
        console.log("Error fetching Users:", error)
        res.status(500).json({message: "Internal server error"})
    }
})     

//Update user

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

userRouter.put("/", authMiddleware, async(req, res) => {
    const {success} = updateBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error while updating Info"
        })
    }

    await userAuth.updateOne(
        {_id: req.userId}, {$set: req.body}
    )
    res.json({
        message:"updated successfully"
    })
})
export default userRouter
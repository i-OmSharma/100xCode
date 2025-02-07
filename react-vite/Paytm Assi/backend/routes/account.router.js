import express from "express"
import { Account } from "../models/balance.models"
import authMiddleware from "./middleware"
import mongoose from "mongoose"

const accountRouter = express.Router()

router.get("/balanace", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
})

router.post("/transfer", authMiddleware, async(req, res) => {
    const session = await mongoose.startSession()
    
    session.startTransaction()
    const{ amount, to} = req.body

    //Feth the account within the transaction

    const account = await Account.findOne({userId: req.userId}).session(session)

    if(!account || account.balance < amount) {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({userId: to}).session(session)

    if(!toAccount) {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Invalid account"
        })
    }

})

export default accountRouter
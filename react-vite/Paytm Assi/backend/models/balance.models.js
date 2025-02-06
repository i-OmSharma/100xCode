import mongoose, {Schema} from "mongoose";

const balanceSchema = new Schema({
        userId: {
            type: Schema.Types.ObjectId,
            ref: "userAuth",
            required: true
        },
        balance: {
            type: Number,
            required: true
        }
    }
)

export const userBalance = mongoose.model("BalanceSchrema", balanceSchema)
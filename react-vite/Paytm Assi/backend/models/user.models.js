import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: [true, "PassWord is required"],
            minlength: [6, "Minimum length is 6 char"]
        },
        firstName: {
            type: String,
            required: true
        },
        lastaname: {
            type: String
        }
    }, {
        timestamps: true
    }
)

export const  userAuth = mongoose.model("UserAuth", userSchema)
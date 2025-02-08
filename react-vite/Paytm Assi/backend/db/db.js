import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DataBase Connected");
        
    } catch(error) {
        console.log("DataBase not connected!", error)
        process.exit(1)
    }
}

export default connectDB
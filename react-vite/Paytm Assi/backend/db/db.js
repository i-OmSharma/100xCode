import mongoose from "mongoose";

mongoose.connect = async () => {
    try{
        await mongoose.connect.env.MONGO_URI
        console.log("DB connected");
    }
    
    catch(error) {
        console.log("DB not connected error", error);
        process.exit(1)        
    }
}

export default connectDB
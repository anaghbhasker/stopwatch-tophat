import mongoose from "mongoose";

const connectDb=async(DATABASE_URL)=>{
    mongoose.set('strictQuery',false);
    try {
        const DB_OPTIONS={dbName:"tophat"}
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb
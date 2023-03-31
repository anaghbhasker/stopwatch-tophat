import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email:{type:String},
    password:{type:String}
})

const userModal=mongoose.model('users',userSchema)
export default userModal
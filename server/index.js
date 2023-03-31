import express from "express"
import cors from 'cors'
import morgan from "morgan"

import connectDb from "./Config/dbConnection.js"
import userModal from "./model/userSchema.js"

const app=express()
const port=4000


connectDb("mongodb+srv://anaghbhasker:mfvvflhwwdChEcHP@cluster0.z1kq5aq.mongodb.net/?retryWrites=true&w=majority")

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
}))

app.use(morgan("dev"))
app.use(express.json())


app.post('/login',async(req,res,next)=>{
    try {
        let obj=req.body
        const userExist=await userModal.findOne({
            email:obj.email
        })
        if (userExist) {
            if (userExist.password===obj.password) {
                res.json({status:"success",message:"Login successfully",userEmail:userExist.email})
            } else {
                res.json({status:"failed",message:"Password did not match"})
            }
        } else {
            res.json({status:"failed",message:"Email not registered"})
        }
        
    } catch (error) {
        res.json({status:"failed",message:error.message})
    }
})






app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
})
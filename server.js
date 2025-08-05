import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import itemRoutes from "./routes/itemRoutes.js"

dotenv.config()

mongoose.connect(process.env.mongo_uri)
.then(()=>console.log("database connected"))
.catch((err)=>console.log("Database Connection Error",err))

const app = express()
app.use(express.json())
app.use((req,res,next)=>{
 console.log(`Request type is ${req.method} Request url is ${req.url}`)
 next()
})

const port= 3000

app.get('/',(req,res)=>{
    res.send("inventory API is Running")
})

app.get("/health",(req,res)=>{
      res.status(200).send("server health is good")
})

app.use('/items',itemRoutes)


app.use((req,res)=>{
    res.status(404).json({
        success:false,
        message:"not found",

    })
})


app.listen(port,()=>{
    console.log("welcome")
})





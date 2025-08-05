import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number,
})

const itemModel = mongoose.model("items",itemSchema)

export default itemModel
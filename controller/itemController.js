import itemModel from "../model/itemModel.js";

export const addItem = async (req,res)=>{
     try{
     const {name,quantity,price} = req.body
     const newItem = await itemModel.create({name,quantity,price})
     res.status(200).json(newItem)
     }catch(error){
          res.status(500).json({error:error.message})
     }
}

export const getAllItems = async (req,res)=>{
     try{
         const items = await itemModel.find({})
         res.status(200).json({items})
     }catch(error){
          res.status(500).json({error:error.message})
     }
     

}
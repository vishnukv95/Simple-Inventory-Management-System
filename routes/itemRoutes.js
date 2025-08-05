import express from "express"
import { addItem,getAllItems } from "../controller/itemController.js"


const itemRoutes = express.Router()

itemRoutes.get('/',getAllItems)
itemRoutes.post('/',addItem)

export default itemRoutes
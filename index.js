import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/product.model.js";
import productRouter from "./routers/products.router.js";

const app=express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//router
app.use('/api/products',productRouter)





app.get('/',(req,res)=>{
    res.send("All here is to study and get placement in thinkbiz ")
})



mongoose.connect("mongodb+srv://alvishvarsani2003:alvish@cluster0.vz5gujs.mongodb.net/")
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
})
.catch(()=>{
    console.log("Connection failed");
})
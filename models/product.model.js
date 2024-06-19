import mongoose, { model } from "mongoose";

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the product name"]
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false
    }
},{
    timestamps:true,
})

export const Product=mongoose.model("Product",ProductSchema);

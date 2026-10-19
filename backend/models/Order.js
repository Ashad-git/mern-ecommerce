import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password:{
            type: String,
            required: true, 
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model("Order", orderSchema);
export default Order;
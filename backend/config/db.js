import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sajii:Saji2000@cluster0.kvs6cuy.mongodb.net/food_delivery_app').then(()=>console.log("DB Connected"));
}
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connect sucessfully${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Database error connection ${error.message}`)
        process.exit(1);
    }
};

export default connectDB;
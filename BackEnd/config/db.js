require("dotenv").config();
const mongoose = require("mongoose");

const connectDB  = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected Successfully");

    } catch(error) {
        console.error("MongoDB Connection Fail");
        process.exit(1);
    }
};

module.exports = connectDB;
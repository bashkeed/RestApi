import mongoose from "mongoose";

const connectDB = async()=>{
    const uri = process.env.MONGO_URI
   await mongoose.connect(uri, {
        dbname: 'mongoose'
    }, {useNewUrParser:true},{useUnifiedTopology:true})
    .then(()=> console.log("MongoDB Connected..."))
    .catch(error => console.log('database connection failed!',error));

}

export default connectDB

import mongoose from "mongoose";

const DbSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },

    age:{
        type:Number,
        require:true
    },

    email:{
        type: String,
        require: true,
        unique: true
    },
})
const User = mongoose.model('info', DbSchema)
export default User
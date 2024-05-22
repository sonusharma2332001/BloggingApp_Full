import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:'https://static.thenounproject.com/png/2643408-200.png'
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

const User = mongoose.model('User',userSchema);
export default User;